import { useState } from 'react'
import style from './CommentForm.module.css'


function CommentForm({ isEdit, toggleIsEdit, content }) {
    // 수정 폼 안에 작성되는 내용 관리
    const [localContent, setLocalContent] = useState(content)

    // 수정 상태 취소 핸들링 함수
    const handleQuitEdit = () => {
        // 입력값 초기화
        setLocalContent(content)
        // 수정 모드 취소
        toggleIsEdit();
    }

    return (
        <form>
            <textarea className={style.textarea} placeholder='댓글을 작성하세요.' value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}></textarea>
            <div className={style.button_wrapper}>
                {isEdit && <button className={style.button_cancel} onClick={handleQuitEdit}>취소</button>}
                <button className={style.button_save}>작성</button>
            </div>
        </form>
    )
}

export default CommentForm