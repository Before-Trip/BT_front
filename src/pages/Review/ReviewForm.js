import { useNavigate, useParams } from "react-router-dom"
import { createReview } from "../../api/review"
import { useState } from "react";
import style from './Reivew.module.css'

function ReviewForm() {

    const [inputValue, setInputValue] = useState({
        title: "",
        content: "",
    })

    const navigate = useNavigate()
    const { id } = useParams();

    const handleChange = (e) => {
        const { value, name } = e.target

        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createResData = await createReview(inputValue.title, inputValue.content)
        if (createResData) navigate(`/${id}/review/${createResData.id}`)
    }

    return (
        <div className={style.ReviewForm}>
            <form onSubmit={handleSubmit}>
                <div className={style.inputBox}>
                    <input
                        placeholder="제목을 입력하세요."
                        name='title'
                        value={inputValue.title}
                        onChange={handleChange} />
                </div>
                <textarea name='content' defaultValue={inputValue.content} onChange={handleChange}></textarea>
                <button>작성하기</button>
            </form>

        </div >
    )
}

export default ReviewForm