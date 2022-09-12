import { BrowserRouter, HashRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/UI/Navbar'
import AppRouter from './components/UI/AppRouter'
import { FC, useEffect } from 'react'
import { useActions } from './hooks/useActions'
import { IUser } from './components/models/IUser'

const App: FC = () => {
  
  const {setIsAuth, setUser} = useActions()
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setIsAuth(true);
    }
  }, [])

  return (
    <HashRouter>
      <Navbar />
      <AppRouter />
    </HashRouter>
  )
}

export default App