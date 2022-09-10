import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../router';
import ManIcon from '@mui/icons-material/Man';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import { LinearProgress } from '@mui/material';


const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth, user, isLoading} = useTypedSelector(state => state.auth)
  const {loading} = useTypedSelector(state => state.user)
  const {logout} = useActions()

  return (
    <div>
          <div className='navbar'>
          <div className="navbar__links">
            <AppBar sx={{height: '7vh', backgroundColor: 'CornflowerBlue'}}>
                <Box>
                {isAuth ? 
                  <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant='h4'>SkyBang</Typography>
                    <ButtonGroup variant='contained' color='primary'>
                      <Button startIcon={<ManIcon />} onClick={() => navigate('/schedule')}>Private schedule page</Button>
                      <Button startIcon={<ForumIcon />} onClick={() => navigate('/forum')}>Forum page</Button>
                      <Button startIcon={<HomeIcon />} onClick={() => navigate('/')}>Main page</Button>
                    </ButtonGroup>
                   <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                    <Button startIcon={<LogoutIcon />} sx={{color:'white'}} variant='contained' color='primary' onClick={logout}>Log Out</Button>
                    <Typography sx={{ml: 8}}>{user.username}</Typography>
                   </Box>   
                  </Toolbar>
                  :
                  <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant='h3'>SkyBang</Typography>
                    <></>
                  </Toolbar>
                  }
                </Box>
                {loading || isLoading ?
                <LinearProgress />
              :
              <div></div>}
            </AppBar>
          </div>
        </div>
    </div>
  )
}

export default Navbar