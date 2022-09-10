export interface CommentState {
    comments: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum CommentActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    FETCH_COMMENT_PAGE = 'FETCH_COMMENT_PAGE',
}

interface FetchCommentAction {
    type: CommentActionTypes.FETCH_COMMENTS
}
interface FetchCommentSuccessAction {
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS
    payload: any[]
}
interface FetchCommentErrorAction {
    type: CommentActionTypes.FETCH_COMMENTS_ERROR
    payload: string
}
interface SetCommentPage {
    type: CommentActionTypes.FETCH_COMMENT_PAGE
    payload: number
}

export type CommentAction = FetchCommentAction | FetchCommentSuccessAction | FetchCommentErrorAction | SetCommentPage
