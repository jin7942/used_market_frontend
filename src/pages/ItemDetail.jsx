import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../common/api';

const ItemDetail = () => {
    const { itemSeq } = useParams();
    // 상품
    const [item, setItem] = useState([]);
    // 썸네일
    const [img, setImg] = useState([]);
    // 이미지 리스트
    const [imgList, setImgList] = useState([]);

    // 상품 조회
    useEffect(() => {
        // 이미지 조회
        const getImgList = async () => {
            const res = await API.get(`/imges/list?seq=${itemSeq}`);
            const imgList = res.data.data;

            setImgList(imgList);
            imgList.find((img) => {
                if (img.imgUploadSort === 0) setImg(img);
            });
        };

        // 상품 조회
        const getItemOne = async () => {
            const res = await API.get(`/items/detail?seq=${itemSeq}`);
            setItem(res.data.data);
        };

        getImgList();
        getItemOne();
    }, [itemSeq]);

    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className='container mt-5 flex-grow-1'>
                <div className='row'>
                    {/* 상품 이미지 썸네일 */}
                    <div className='col-md-6 d-flex align-items-end'>
                        <img src={`${img.imgUploadPath}${img.imgUploadUuidName}`} className='img-fluid rounded' alt={item.itemTitle} />
                    </div>

                    {/* 상품 정보 */}
                    <div className='col-md-6 d-flex flex-column justify-content-between'>
                        <div>
                            <h2>{item.itemTitle}</h2>
                            <h4 className='text-danger'>{item.itemPrice}</h4>
                            <h5>{item.userNickname}</h5>
                            <p>{item.itemDescription}</p>
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-primary me-2'>채팅하기</button>
                            <button className='btn btn-outline-secondary me-2'>찜하기</button>
                            <Link to='/order'>
                                <button className='btn btn-dark'>결제하기</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 자세히 보기 */}
                <div className='row mt-5 mb-5 justify-content-center'>
                    {imgList.map((img, idx) => (
                        <div className='col-10 mb-3' key={img.imgUploadUuidName || idx}>
                            <img src={`${img.imgUploadPath}${img.imgUploadUuidName}`} className='img-fluid rounded' alt={item.itemTitle} />
                        </div>
                    ))}
                </div>

                {/* 상품 추천 */}
                <h2>상품 추천</h2>
                <hr />
                {/* <div className='row'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div> */}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ItemDetail;
