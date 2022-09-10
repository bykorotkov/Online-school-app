import { PostState, PostAction, PostActionTypes } from "../../types/post";


const initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
    limit: 20
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS: 
            return {...state, loading: true}
        case PostActionTypes.FETCH_POSTS_SUCCESS: 
            return {...state, loading: false, posts: action.payload}
        case PostActionTypes.FETCH_POSTS_ERROR: 
            return {...state, loading: false, error: action.payload}
        case PostActionTypes.FETCH_POST_PAGE: 
            return {...state, page: action.payload}
        default:
            return state
    }
}