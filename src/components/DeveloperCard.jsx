import React from 'react';

const DeveloperCard = () => {
    return (
        <div className='card text-end shadow-sm mt-5 p-4' style={{ width: '100rem', minHeight: '30rem', margin: '0 auto' }}>
            <div className='row g-0 align-items-center h-100'>
                {/* 프로필 이미지 */}
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                    <img
                        src='../../public/img/profile.jpg'
                        className='img-fluid rounded-start'
                        alt='Developer'
                        style={{ height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div className='col-md-8 d-flex flex-column justify-content-center align-items-end pe-5'>
                    <div className='card-body'>
                        {/* 소개 */}
                        <h2 className='card-title'>김진범</h2>
                        <p className='card-text fs-5 text-start'>
                            Check this out 나는 정상수 백발백중하는 명사수 부산진구 유명 가수 일취월장하며 성장 중 내가 대표해 이 거리를 누구도 막지 못해 내
                            지껄임을 사양할게 너의 벌스 피처링은 이건 나의 track, my swag, 노린 rap attack 계속해서 매섭게 쏘겠어 죄 속에서 날 대속해 주신 주
                            운명의 추, 악전고투 성난 황소 같은 삶과 벌이는 투우 세상의 바다를 부유 주님 따라 run to you 인생의 방향은 예수 걸어가신 고난의 좁은
                            문으로 죄인아 눈 들어
                        </p>

                        {/* 링크 */}
                        <div className='d-flex flex-column'>
                            <a href='https://github.com/jin7942' className='btn btn-dark btn-lg mb-3' target='_blank' rel='noopener noreferrer'>
                                GitHub 보기
                            </a>
                            <a href='https://linkedin.com' className='btn btn-secondary btn-lg' target='_blank' rel='noopener noreferrer'>
                                LinkedIn 보기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCard;
