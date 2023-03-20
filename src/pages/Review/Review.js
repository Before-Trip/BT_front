import LikeCount from "../../components/LikeCount/LikeCount"
import Profile from '../../components/Profile/Profile'
import style from './Reivew.module.css'
import Comment from '../../components/Comment/Comment'
import { useEffect, useState } from "react"
import { BASE_URL } from "../../utils/const"
import { useParams } from "react-router"

function Review() {

    const { reviewId } = useParams();

    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState({});

    const fetchDetail = async () => {
        const fetchRes = await fetch(`${BASE_URL}articles/review/${reviewId}/`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("데이터 fetch요청 결과입니다.:", fetchRes)

        if (fetchRes.ok) {
            const reviews = await fetchRes.json()
            setReview(reviews)
            setLoading(false);
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
            <Comment id={review.id} />
        </div >

    )
}

export default Review