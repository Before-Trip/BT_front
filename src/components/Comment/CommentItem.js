// hooks
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getRefresh } from '../../utils/getRefresh'

// components
import CommentForm from './CommentForm'
import Profile from '../Profile/Profile'
import style from './CommentItem.module.css'
import { removeComment } from '../../api/review'

function CommentItem({ author, comment, id, update }) {

    const currentUser = useSelector((state) => state.userInfo.email)

    const { content, created_at } = comment

    // 편집 모드
    const [isEdit, setIsEdit] = useState(false);
    // 편집모드 토글 함수
    const toggleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    // 삭제
    const onRemove = async () => {
        const accessToken = await getRefresh();
        if (accessToken) {
            const removeRes = await removeComment(id, comment.id)
            if (removeRes) await update();
        }
    }

    return (
        <div className='inner__content'>
            <div className={style.Comment}>
                <header>
                    <Profile user={author} created_at={created_at} />
                    {author === currentUser && !isEdit &&
                        <div className={style.btn_wrapper}>
                            <button onClick={toggleIsEdit} className={style.btn_edit}>수정</button>
                            <button onClick={onRemove} className={style.btn_delete}>삭제</button>
                        </div>}
                </header>
                <div className={style.comment_content}>
                    {isEdit ?
                        <CommentForm
                            id={id}
                            isEdit={isEdit}
                            toggleIsEdit={toggleIsEdit}
                            content={content}
                            commentId={comment.id}
                        /> : <p>{content}</p>}
                </div>
            </div>

        </div>
    )
}

export default CommentItem