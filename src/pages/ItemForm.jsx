import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API from '../common/API';
import util from '../common/util';
import config from '../common/_config';
import { useNavigate } from 'react-router-dom';

const ItemForm = () => {
    const [itemFormData, setItemFormData] = useState({
        itemTitle: '',
        itemDescription: '',
        itemPrice: '',
    });
    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);

    // 상품등록 핸들러
    const handleInstItem = async (e) => {
        e.preventDefault();

        try {
            // 유효성 검사
            const errors = [
                util.validateField('itemTitle', itemFormData.itemTitle),
                util.validateField('itemPrice', itemFormData.itemPrice),
                util.validateField('itemDescription', itemFormData.itemDescription),
                util.validateRequiredFields(itemFormData) ? '' : '모든 항목을 입력해 주세요',
            ].filter(Boolean);
            if (errors.length > 0 || images.length < 1) {
                alert(errors[0] || '이미지를 한 장 이상 등록하세요.');
                return;
            }

            // 상품 등록
            const res = await API.post('/items/register', itemFormData);
            const itemSeq = res.data.data.seq;
            if (!itemSeq) {
                alert('상품 등록 실패');
                return;
            }

            // 이후 이미지 업로드 → 백엔드 저장 진행
            await handleImageUpload(itemSeq);
            navigate(`/item/detail/${itemSeq}`);
        } catch (err) {
            console.error(err);
            alert('오류 발생. 다시 시도해주세요.');
        }
    };

    // 이미지 등록 핸들러
    const handleImageUpload = async (itemSeq) => {
        if (images.length > 5 || images.length === 0) {
            alert('이미지는 최대 5장까지 업로드할 수 있으며, 최소 1장 이상 등록해야 됩니다.');
            return;
        }

        try {
            // 1. 이미지 서버 업로드
            const formData = new FormData();
            images.forEach((img) => formData.append('images', img));

            const imgServerRes = await API.post(`${config.UPLOAD_API}/uploadImg`, formData, {
                headers: {
                    'x-api-key': 'SEXY_GUY_USED_MARKET',
                    'Content-Type': 'multipart/form-data',
                },
            });

            const uploadedList = imgServerRes.data.data;

            // 2. 응답 데이터를 백엔드 DTO에 맞게 가공
            const imgList = uploadedList.map((img) => ({
                imgPseq: itemSeq, // 상품 등록 후 받은 PK
                imgUploadSort: img.sort,
                imgUploadName: img.originalname,
                imgUploadUuidName: img.uuidName,
                imgUploadPath: img.path,
                imgUploadExt: img.ext,
                imgUploadSize: img.fileSize,
                imgUploadTypeCode: 'ITEM',
            }));

            // 3. 백엔드에 이미지 정보 저장 요청
            await API.post('/imges/upload', { imgList });

            alert('이미지 등록 성공');
        } catch (err) {
            console.error(err);
            alert('이미지 업로드 중 오류 발생');
        }
    };

    // 이미지 프리뷰 핸들러
    const handleImagePreview = (event) => {
        const filesArray = Array.from(event.target.files);

        if (filesArray.length > 5) {
            alert('이미지는 최대 5장까지 업로드 가능합니다.');
            return;
        }

        setImages(filesArray);
        const previewArray = filesArray.map((file) => URL.createObjectURL(file));
        setPreviews(previewArray);
    };

    // 이미지 삭제 핸들러
    const handleImageRemove = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);
        setImages(updatedImages);
        setPreviews(updatedPreviews);
    };

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />

            <main className='container mt-5 flex-grow-1'>
                <h2 className='mb-4'>상품 등록</h2>

                <div className='row'>
                    {/* 좌측 - 이미지 미리보기 */}
                    <div className='col-md-5'>
                        <div className='card shadow-sm p-3'>
                            <h4 className='mb-3'>미리보기</h4>
                            {previews.length === 0 ? (
                                <p className='text-muted'>이미지를 업로드하면 미리보기가 표시됩니다.</p>
                            ) : (
                                <div className='d-flex flex-wrap'>
                                    {previews.map((src, index) => (
                                        <div key={index} className='position-relative me-2 mb-2'>
                                            <img
                                                src={src}
                                                alt={`미리보기 ${index + 1}`}
                                                className='border rounded'
                                                style={{
                                                    width: index === 0 ? '120px' : '100px',
                                                    height: index === 0 ? '120px' : '100px',
                                                    objectFit: 'cover',
                                                    border: index === 0 ? '2px solid red' : 'none',
                                                }}
                                            />
                                            {index === 0 && <span className='position-absolute top-0 start-0 bg-danger text-white p-1 small'>대표 이미지</span>}
                                            <button className='btn btn-sm btn-danger position-absolute top-0 end-0' onClick={() => handleImageRemove(index)}>
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 우측 - 상품 등록 폼 */}
                    <div className='col-md-7'>
                        <div className='card shadow-sm p-4'>
                            <form>
                                {/* 상품명 */}
                                <div className='mb-3'>
                                    <label className='form-label'>상품명</label>
                                    <input
                                        type='text'
                                        name='itemTitle'
                                        className='form-control'
                                        placeholder='상품명을 입력하세요'
                                        value={itemFormData.itemTitle}
                                        onChange={(e) => setItemFormData({ ...itemFormData, [e.target.name]: e.target.value })}
                                    />
                                </div>

                                {/* 가격 */}
                                <div className='mb-3'>
                                    <label className='form-label'>가격</label>
                                    <input
                                        type='number'
                                        name='itemPrice'
                                        className='form-control'
                                        placeholder='가격을 입력하세요'
                                        value={itemFormData.itemPrice}
                                        onChange={(e) => setItemFormData({ ...itemFormData, [e.target.name]: e.target.value })}
                                    />
                                </div>

                                {/* 설명 */}
                                <div className='mb-3'>
                                    <label className='form-label'>설명</label>
                                    <textarea
                                        name='itemDescription'
                                        className='form-control'
                                        rows='3'
                                        placeholder='상품 설명을 입력하세요'
                                        value={itemFormData.itemDescription}
                                        onChange={(e) => setItemFormData({ ...itemFormData, [e.target.name]: e.target.value })}
                                    ></textarea>
                                </div>

                                {/* 이미지 업로드 */}
                                <div className='mb-3'>
                                    <label className='form-label'>상품 이미지 업로드</label>
                                    <input type='file' className='form-control' multiple accept='image/*' onChange={handleImagePreview} />
                                </div>

                                <button type='button' className='btn btn-primary w-100 mt-3' onClick={handleInstItem}>
                                    상품 등록
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ItemForm;
