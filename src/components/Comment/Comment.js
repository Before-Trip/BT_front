import { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/const'
import style from './Comment.module.css'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import { getComment } from '../../api/review'

function Comment({ id }) {

    const [loading, setLoading] = useState(true);
    const [commentList, setCommentList] = useState([]);

    const fetchComment = async () => {
        const commentData = await getComment(id)

        if (commentData) {
            setCommentList(commentData)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchComment();
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
                    id={id}
                    author={comment.user}
                    comment={comment}
                    update={fetchComment} />))}

            </div>
        </section>
    )
}

export default Comment