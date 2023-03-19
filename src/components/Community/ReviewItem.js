import style from './Review.module.css'
import { HiHeart } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom';

function ReviewItem({ article }) {

    const { id: country } = useParams();

    const { id, title, created_at, user: author } = article

    return (
        <Link to={`/${country}/review/${id}`}>
            <article className={style.reviewItem}>
                <div className={style.title}>
                    <h4>{title}</h4>
                    <span>{author}</span>
                    <span>&nbsp;|&nbsp;</span>
                    <span>{created_at}</span>
                </div>
                <div className={style.likeCount}>
                    <span><HiHeart /></span>
                    <div className={style.count}>2</div>
                </div>
            </article>
        </Link>
    )
}

export default ReviewItem