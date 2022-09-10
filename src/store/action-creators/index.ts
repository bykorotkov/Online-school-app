import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as PostActionCreators from './post'
import * as CommentActionCreators from './comment'
import { AuthActionCreators } from '../reducers/auth/action-creators'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...PostActionCreators,
    ...CommentActionCreators,
    ...AuthActionCreators
}