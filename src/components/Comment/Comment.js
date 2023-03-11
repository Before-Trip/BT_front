import { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/const'
import style from './Comment.module.css'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

function Comment({ id }) {

    const [loading, setLoading] = useState(true);

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}articles/review/${id}/comment/`)
            .then(res => res.json())
            .then(res => {
                setCommentList(res)
                // console.log(res)
                setLoading(false)
            })
    }, [])

    const updateCommentList = (comment) => {
        setCommentList([comment, ...commentList])
    }

    if (loading) return <div>댓글을 불러오는 중입니다...</div>

    return (
        <section className={style.Comment}>
            <div className='inner'>
                <div className='inner__content'>
                    <h2 className={style.title}>
                        {`${commentList.length}개의 댓글`}
                    </h2>
                    <CommentForm create={updateCommentList} id={id} />
                </div>
                {commentList.map(comment => (<CommentItem key={comment.id}
                    author={comment.user}
                    comment={comment} />))}

            </div>
        </section>
    )
}

export default Comment