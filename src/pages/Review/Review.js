import LikeCount from "../../components/LikeCount/LikeCount"
import Profile from '../../components/Profile/Profile'
import style from './Reivew.module.css'
import Comment from '../../components/Comment/Comment'
import { useEffect, useState } from "react"

function Review() {

    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/articles/review/1/")
            .then(res => res.json())
            .then(res => {
                setReview(res);
                setLoading(false);
                console.log(res);
            })
    }, [])

    if (loading) return <p>사용자 정보 로딩 중</p>


    return (
        <div className={style.detail}>
            <section className={style.article}>
                <div className='inner'>
                    <div className={style.header}>
                        <h1>
                            {review.title}
                        </h1>
                        <div className={style.subTitle}>
                            <Profile user={review.user} created_at={review.created_at} />
                            <span className={style.span}>2022.07 ~ 2022.09</span>
                        </div>
                        <LikeCount />
                    </div>
                    <div className={style.content_body}>
                        {review.content}
                    </div>

                </div>

            </section >
            <Comment id={review.id} />
        </div >

    )
}

export default Review