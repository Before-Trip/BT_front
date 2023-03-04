// hooks
import { useState } from 'react'

// components
import CommentForm from './CommentForm'
import Profile from '../Profile/Profile'
import style from './CommentItem.module.css'

function CommentItem({ author, user }) {

    // 편집 모드
    const [isEdit, setIsEdit] = useState(true);
    // 편집모드 토글 함수
    const toggleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div className='inner__content'>
            <div className={Comment}>
                <header>
                    <Profile />
                    {author === user && !isEdit && <div className={style.btn_wrapper}>
                        <button onClick={toggleIsEdit} className={style.btn_edit}>수정</button>
                        <button className={style.btn_delete}>삭제</button>
                    </div>}
                </header>
                <div className={style.comment_content}>
                    {isEdit ? <CommentForm content={"댓글 내용"}
                        isEdit={isEdit} toggleIsEdit={toggleIsEdit} /> : <p>내용내용</p>}

                </div>
            </div>

        </div>
    )
}

export default CommentItem