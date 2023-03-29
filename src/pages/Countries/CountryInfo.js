import Weather from '../../components/Weather'
import style from './Countries.module.css'


function CountryInfo() {
    return (
        <div className={style.CountryInfo}>
            <header>
                <div className='inner'>
                    <div className={style.date}>
                        <div className={style.now}>                        </div>
                        <h3>2023년 3월 21일 여행 수칙</h3>
                    </div>
                    <div className={style.country__box}>
                        <p className={style.updated_at}>12월 13일 - 일본</p>
                        <ul>
                            <li>
                                <p>비자(VISA) 정보</p>
                                <div>
                                    비자가 필요합니다.
                                </div>
                            </li>
                            <li>
                                <p>국가 방역정책</p>
                                <div>
                                    비자가 필요합니다.
                                </div>
                            </li>
                            <li>
                                <p>해외입국자 격리여부</p>
                                <div>
                                    비자가 필요합니다.
                                </div>
                            </li>
                            <li>
                                <p>백신접종 필수여부</p>
                                <div>
                                    비자가 필요합니다.
                                </div>
                            </li>
                            <li>
                                <p>기타 정보</p>
                                <div>
                                    비자가 필요합니다.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <section>
                <div className='inner'>
                    <div className={style.news}>
                        <h4>소식&nbsp;&gt;</h4>
                        <p>일본 여권, 안보문서 어쩌구 내용입니다.</p>
                    </div>

                    <div className={style.weather}>
                        <h4>날씨 정보</h4>
                        <div className={style.weather__cards}>
                            <Weather />
                        </div>

                    </div>

                </div>

            </section>


        </div>
    )
}
export default CountryInfo