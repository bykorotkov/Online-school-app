export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',  
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',  
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USER_PAGE = 'FETCH_USER_PAGE'  
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface SetUserPage{
    type: UserActionTypes.FETCH_USER_PAGE;
    payload: number;
}

export  type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | SetUserPage
