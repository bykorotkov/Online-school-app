import axios from "axios"
import { Dispatch } from "react"
import { CommentAction, CommentActionTypes } from "../../types/comment"


export const fetchComments = (page = 1, limit = 20) => {
    return async (dispatch: Dispatch<CommentAction>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENTS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: CommentActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch ({type: CommentActionTypes.FETCH_COMMENTS_ERROR, 
                payload: 'Произошла ошибка при загрузке комментариев'
            })
        }
    }
}

export function setCommentPage(page: number): CommentAction {
    return {type: CommentActionTypes.FETCH_COMMENT_PAGE, payload: page}
}