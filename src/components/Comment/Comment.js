import style from './Comment.module.css'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'


function Comment() {
    return (
        <section className={style.Comment}>
            <div className='inner'>
                <div className='inner__content'>
                    <h2 className={style.title}>
                        0개의 댓글
                    </h2>
                    <CommentForm />
                </div>
                <CommentItem author={"Lucy"} user={"Lucy"} />
            </div>
        </section>
    )
}

export default Comment