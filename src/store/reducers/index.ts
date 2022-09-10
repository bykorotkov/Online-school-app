import { combineReducers } from "redux";
import authReducer from "./auth";
import { commentReducer } from "./commentReducer";
import { postReducer } from "./postReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    post: postReducer,
    comment: commentReducer,
    auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>