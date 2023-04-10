import { BASE_URL } from "../utils/const"
import { getRefresh } from "../utils/getRefresh";
import { getUserInfo } from "./login";

// 리뷰 가져오는 함수
export const getReview = async (reviewId) => {
    const reviewRes = await fetch(
        `${BASE_URL}articles/review/${reviewId}/`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )

    // 성공적으로 요청했다면,
    if (reviewRes.ok) {
        try {
            return await reviewRes.json();
        }

        catch {
            console.log(`에러 발생, ${new Error(reviewRes.json().message)}`)
            return null
        }
    }
}

// 댓글 가져오는 함수
export const getComment = async (reviewId) => {
    const commentRes = await fetch(`${BASE_URL}articles/review/${reviewId}/comment/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (commentRes.ok) {
        try {
            return await commentRes.json()
        }

        catch {
            console.log(`에러발생, ${new Error(commentRes.json().message)}`)
            return null
        }
    }
}

// 댓글 삭제하는 함수
export const removeComment = async (reviewId, commentId) => {
    const accessToken = await getRefresh();
    if (accessToken) {
        const removeRes = await fetch(`${BASE_URL}articles/review/${reviewId}/comment/${commentId}/`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (removeRes.ok) {
            console.log("요청은 성공하였습니다.")
            return true

        } else { console.log("token이 존재하지 않습니다. 유효 토큰이 아닙니다.") }
    }
}

// 게시글 작성 함수
export const createReview = async (title, content) => {
    const authorize = await getUserInfo();
    if (authorize) {
        const createRes = await fetch(`${BASE_URL}articles/review/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, content
            })
        })

        return createRes.ok ? createRes.json() : null
    }
}