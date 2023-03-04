import { Link } from 'react-router-dom'
import style from './Profile.module.css'


function Profile() {
    return (
        <div className={style.profile}>
            <Link>
                <div className={style.avatar}>
                    <img src={process.env.PUBLIC_URL + '/assets/us.jpg'} alt='프로필 사진' />
                </div>
            </Link>
            <div className={style.info}>
                <h6>작성자 이름입니다.</h6>
                <span>2023.02.27 오후 12:50</span>
            </div>
        </div >

    )
}

export default Profile