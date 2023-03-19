// hooks 
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/const'


// components
import ReviewItem from './ReviewItem'
import style from './ReviewList.module.css'

function ReviewList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    const fetchReview = async () => {
        const fetchRes = await fetch(`${BASE_URL}articles/review/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (fetchRes.ok) {
            const dataRes = await fetchRes.json()
            // console.log(dataRes)
            setData(dataRes)
        }

        return {
            'message': 'fail'
        }
    }

    useEffect(() => {
        if (fetchReview().message === 'fail') {
            return (<div>정보 불러오기에 실패했습니다.</div>)
        };
        setLoading(false)
    }, [])

    return (
        <section className={style.ReviewList}>
            <header>
                <h2>리뷰목록</h2>
                <Link to={`/${id}/create`}>
                    <button>후기 작성</button>
                </Link>
            </header>
            {data.map((article) => <ReviewItem key={article.id} article={article} />)}

        </section>
    )
}

export default ReviewList