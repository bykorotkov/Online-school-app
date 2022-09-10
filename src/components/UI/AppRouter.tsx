import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { privateRoutes, publicRoutes } from '../router'

const AppRouter: FC = () => {
  const {isAuth} = useTypedSelector(state => state.auth)

  return (
   isAuth ? 
        <Routes>
          {privateRoutes.map(route => 
            <Route path={route.path} element={<route.element />} key={route.path}/>)}
        </Routes>
        :
        <Routes>
          {publicRoutes.map(route => 
            <Route path={route.path} element={<route.element />} key={route.path}/>)}
        </Routes>
        
  )
}

export default AppRouter