export interface PostState {
    posts: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    FETCH_POST_PAGE = 'FETCH_POST_PAGE',
}

interface FetchPostAction {
    type: PostActionTypes.FETCH_POSTS
}
interface FetchPostActionSuccess {
    type: PostActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[]
}
interface FetchPostActionError {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}
interface SetPostPage {
    type: PostActionTypes.FETCH_POST_PAGE;
    payload: number;
}

export type PostAction = FetchPostAction | FetchPostActionSuccess | FetchPostActionError | SetPostPage