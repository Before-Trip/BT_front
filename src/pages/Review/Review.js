import LikeCount from "../../components/LikeCount/LikeCount"
import Profile from '../../components/Profile/Profile'
import style from './Reivew.module.css'
import Comment from '../../components/Comment/Comment'

function Review() {
    return (
        <div className={style.detail}>
            <section className={style.article}>
                <div className='inner'>
                    <div className={style.header}>
                        <h1>
                            여행 괜찮나요?
                        </h1>
                        <div className={style.subTitle}>
                            <Profile />
                            <span className={style.span}>2022.07 ~ 2022.09</span>
                        </div>
                        <LikeCount />
                    </div>
                    <div className={style.content_body}>
                        내용 들어올 자리

                    </div>

                </div>


            </section >
            <Comment />
        </div >

    )
}

export default Review