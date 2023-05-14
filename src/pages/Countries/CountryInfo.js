import { useParams } from 'react-router-dom';
import Weather from '../../components/Weather'
import { getTodayDate } from '../../utils/date'
import style from './Countries.module.css'
import { getCountry } from '../../utils/countyList';

function CountryInfo() {
    const { id } = useParams();
    const name = getCountry(id)

    const { year, month, date } = getTodayDate();

    return (
        <div className={style.CountryInfo}>
            <header>
                <div className={style.content}>
                    <div className={style.date}>
                        <div className={style.now}></div>
                        <h3>{year}년 {month}월 {date}일 여행 수칙</h3>
                    </div>
                    <div className={style.country__box}>
                        <p className={style.updated_at}>12월 14일 업데이트 - {name}</p>
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
                <div className={style.content}>
                    <div className={style.news}>
                        <h4>소식&nbsp;&gt;</h4>
                        <p>봄을 알리는 ‘눈의 회랑’ 개통… 아오모리시-도와다호 잇는 8km</p>
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