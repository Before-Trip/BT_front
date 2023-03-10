import { useEffect, useState } from 'react'
import style from './Comment.module.css'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

function Comment({ id }) {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/articles/review/${id}/comment/`)
            .then(res => res.json())
            .then(res => {
                setCommentList(res)
                console.log(res)
            })
    }, [])

    const updateCommentList = (comment) => {
        setCommentList([comment, ...commentList])
    }

    return (
        <section className={style.Comment}>
            <div className='inner'>
                <div className='inner__content'>
                    <h2 className={style.title}>
                        {`${commentList.length}개의 댓글`}
                    </h2>
                    <CommentForm create={updateCommentList} id={id} />
                </div>
                {commentList.map(comment => (<CommentItem key={comment.id} author={comment.user} user={"Lucy"} content={comment.content} created_at={comment.created_at} />))}

            </div>
        </section>
    )
}

export default Comment