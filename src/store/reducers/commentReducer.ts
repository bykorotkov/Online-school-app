import {
    CommentState,
    CommentAction,
    CommentActionTypes,
} from '../../types/comment'

const initialState: CommentState = {
    comments: [],
    loading: false,
    error: null,
    page: 1,
    limit: 20,
}

export const commentReducer = (
    state = initialState,
    action: CommentAction
): CommentState => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENTS:
            return { ...state, loading: true }
        case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
            return { ...state, loading: false, comments: action.payload }
        case CommentActionTypes.FETCH_COMMENTS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case CommentActionTypes.FETCH_COMMENT_PAGE:
            return { ...state, page: action.payload }
        default:
            return state
    }
}
