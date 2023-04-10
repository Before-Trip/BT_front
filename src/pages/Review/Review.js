import LikeCount from "../../components/LikeCount/LikeCount"
import Profile from '../../components/Profile/Profile'
import style from './Reivew.module.css'
import Comment from '../../components/Comment/Comment'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getReview } from "../../api/review"

function Review() {

    const { reviewId } = useParams();

    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState({});

    const fetchDetail = async () => {
        const fetchRes = await getReview(reviewId);
        if (fetchRes) {
            setReview(fetchRes)
            setLoading(false);
        } else {
            console.log("응답이 없습니다.")
        }
    }

    useEffect(() => {
        fetchDetail();
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
            <Comment id={reviewId} />
        </div >

    )
}

export default Review