import { BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App