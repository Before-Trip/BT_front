import { Link, useParams } from 'react-router-dom';
import style from './BestItem.module.css'
import { HiHeart } from 'react-icons/hi'

function BestItem({ review }) {

    const { id: country } = useParams();

    const { id, title, content, created_at, user } = review;

    return (
        <Link to={`/${country}/review/${id}`} >
            <div className={style.card}>
                <h3>{title}</h3>
                <div className={style.detail}>
                    <p>{content}</p>
                    <div className={style.subInfo}>
                        <p>{created_at}</p>
                        <span>&middot;</span>
                        <p><HiHeart className={style.ra} /> <span>2</span></p>
                    </div>
                    <p>by {user}</p>
                </div>
            </div>
        </Link >
    )
}

export default BestItem