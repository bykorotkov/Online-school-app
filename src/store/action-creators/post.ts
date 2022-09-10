import axios from "axios"
import { Dispatch } from "react"
import { PostAction, PostActionTypes } from "../../types/post"


export const fetchPosts = (page = 1, limit = 20) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            const response = await axios.get('./threads.json', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch ({type: PostActionTypes.FETCH_POSTS_ERROR, 
                payload: 'Произошла ошибка при загрузке постов'})
        }
    }
}

export function setPostPage(page: number): PostAction {
    return {type: PostActionTypes.FETCH_POST_PAGE, payload: page}
}