import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ItemForm = () => {
    // 이미지 상태 관리
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);

    // 이미지 업로드 핸들러
    const handleImageUpload = (event) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setImages(filesArray);

            // 이미지 미리보기 URL 생성
            const previewArray = filesArray.map((file) => URL.createObjectURL(file));
            setPreviews(previewArray);
        }
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
            {/* Header */}
            <Header />

            {/* Main Content */}
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
                                            {index === 0 && (
                                                <span
                                                    className='position-absolute top-0 start-0 bg-danger text-white p-1 small'
                                                    style={{ borderRadius: '4px' }}
                                                >
                                                    대표 이미지
                                                </span>
                                            )}
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
                                    <input type='text' className='form-control' placeholder='상품명을 입력하세요' />
                                </div>

                                {/* 가격 */}
                                <div className='mb-3'>
                                    <label className='form-label'>가격</label>
                                    <input type='number' className='form-control' placeholder='가격을 입력하세요' />
                                </div>

                                {/* 설명 */}
                                <div className='mb-3'>
                                    <label className='form-label'>설명</label>
                                    <textarea className='form-control' rows='3' placeholder='상품 설명을 입력하세요'></textarea>
                                </div>

                                {/* 이미지 업로드 */}
                                <div className='mb-3'>
                                    <label className='form-label'>상품 이미지 업로드</label>
                                    <input type='file' className='form-control' multiple accept='image/*' onChange={handleImageUpload} />
                                </div>

                                {/* 등록 버튼 */}
                                <button type='submit' className='btn btn-primary w-100 mt-3'>
                                    상품 등록
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ItemForm;
