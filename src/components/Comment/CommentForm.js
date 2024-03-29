import { useState } from 'react'
import { BASE_URL } from '../../utils/const'
import { getRefresh } from '../../utils/getRefresh'
import style from './CommentForm.module.css'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '../../api/login'

function CommentForm({ isEdit, toggleIsEdit, content, create, commentId, update }) {

    const { reviewId } = useParams();

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
        e.preventDefault()

        const checkAuthorize = await getUserInfo();

        if (checkAuthorize) {
            if (isEdit) {
                // 댓글 수정
                const editRes = await fetch(`${BASE_URL}articles/review/${reviewId}/comment/${commentId}/`, {
                    method: 'PATCH',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: localContent,
                    })
                })

                if (editRes.ok) console.log("댓글 수정 요청은 성공했습니다.")
                try {
                    const editData = await editRes.json()
                    console.log(editData)
                    await update()
                    toggleIsEdit();
                }
                catch {
                    console.log(new Error("에러발생"))
                }
            }

            else {
                // 댓글 작성
                const createRes = await fetch(`${BASE_URL}articles/review/${reviewId}/comment/`, {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: localContent,
                    })
                })

                if (createRes.ok) {
                    const createResData = await createRes.json()
                    console.log(createResData)
                    create(createResData)
                    setLocalContent("")
                }
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