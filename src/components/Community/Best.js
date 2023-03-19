import style from './Best.module.css'
import { useEffect, useState, useRef } from 'react'
import BestItem from './BestItem'
import { BASE_URL } from './../../utils/const'

function Best() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const listRef = useRef();

    const reviewFetch = async () => {
        const fetchRes = await fetch(`${BASE_URL}articles/review/best`, {
            method: 'GET',
            credentials: 'include',
        })

        // console.log(fetchRes)
        if (fetchRes.ok) {
            const resData = await fetchRes.json()
            console.log("베스트 리뷰입니다:", resData)
            setData(resData)
        }

    }

    useEffect(() => {
        const dataRes = reviewFetch()
        if (dataRes) {
            console.log("리뷰 데이터를 가져왔습니다.")
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        if (listRef.current) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                listRef.current.scrollTo({
                    left: listRef.current.scrollLeft + e.deltaY,
                    behavior: "smooth"
                })
            }
            listRef.current.addEventListener('wheel', onWheel)
        }
    }, [data])

    if (loading) return <div>정보를 불러오고 있습니다.</div>

    return (
        <section className={style.best}>
            <h2>베스트리뷰</h2>
            <div className={style.list} ref={listRef}>
                {data.map((review) => <BestItem key={review.id} review={review} />)}
            </div>
        </section>

    )
}

export default Best