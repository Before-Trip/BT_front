import { useState } from 'react'
import { getRefresh } from '../../utils/getRefresh'
import style from './CommentForm.module.css'

function CommentForm({ isEdit, toggleIsEdit, content, id, create }) {

    // 수정 폼 안에 작성되는 내용 관리
    const [localContent, setLocalContent] = useState(content)

    // 수정 상태 취소 핸들링 함수
    const handleQuitEdit = () => {
        // 입력값 초기화
        setLocalContent(content)
        // 수정 모드 취소
        toggleIsEdit();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = await getRefresh();

        if (accessToken) {
            console.log(accessToken)
            const createRes = await fetch(`http://localhost:8000/articles/review/${id}/comment/`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: localContent,
                })
            })

            if (createRes.ok) {
                const createResData = await createRes.json()
                // console.log(createResData)
                create(createResData)
                setLocalContent("")
            }
        }


    }

    return (
        <form onSubmit={handleSubmit}>
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