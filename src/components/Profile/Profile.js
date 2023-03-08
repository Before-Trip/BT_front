import { Link } from 'react-router-dom'
import style from './Profile.module.css'


function Profile({ user, created_at }) {
    return (
        <div className={style.profile}>
            <Link>
                <div className={style.avatar}>
                    <img src={process.env.PUBLIC_URL + '/assets/us.jpg'} alt='프로필 사진' />
                </div>
            </Link>
            <div className={style.info}>
                <h6>{user}</h6>
                <span>{created_at}</span>
            </div>
        </div >

    )
}

export default Profile