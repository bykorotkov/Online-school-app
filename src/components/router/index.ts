import React from 'react'
import CommentPage from '../pages/CommentPage'
import Error from '../pages/Error'
import ForumPage from '../pages/ForumPage'
import Login from '../pages/Login'
import MainPage from '../pages/MainPage'
import PostIdPage from '../pages/PostIdPage'
import Schedule from '../pages/Schedule'
import UserIdPage from '../pages/UserIdPage'

export interface IRoute {
    path: string
    element: any
}

export enum RouteNames {
    LOGIN = '/login',
    SCHEDULE = '/schedule',
    COMMENTS = '/comments',
    FORUM = '/forum',
    FORUMID = '/forum/:id',
    MAIN = '/',
    ERROR = '/error',
    REDIRECT = '*',
    USERID = '/users/:id',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: Login },
    { path: RouteNames.REDIRECT, element: Login },
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.SCHEDULE, element: Schedule },
    { path: RouteNames.COMMENTS, element: CommentPage },
    { path: RouteNames.FORUM, element: ForumPage },
    { path: RouteNames.FORUMID, element: PostIdPage },
    { path: RouteNames.USERID, element: UserIdPage },
    { path: RouteNames.MAIN, element: MainPage },
    { path: RouteNames.ERROR, element: Error },
    { path: RouteNames.REDIRECT, element: Error },
]
