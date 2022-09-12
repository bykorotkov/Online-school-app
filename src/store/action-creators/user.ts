import axios from 'axios'
import { Dispatch } from 'react'
import { UserAction, UserActionTypes } from '../../types/user'

export const fetchUsers = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get(
                'https://62f13c1f25d9e8a2e7c8a54c.mockapi.io/Students',
                {
                    params: { _page: page, _limit: limit },
                }
            )
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Loading error. Please try again later',
            })
        }
    }
}

export function setUserPage(page: number): UserAction {
    return { type: UserActionTypes.FETCH_USER_PAGE, payload: page }
}
