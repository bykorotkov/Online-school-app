import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage: FC = () => {
    const navigate = useNavigate()

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2819557182963.59cbc62d33ca0.jpg' alt='' style={{ height: 600, width: 900}}/>
        <Typography variant='h3'>Welcome to SkyBang!</Typography>
        <Typography variant='h5'>Join Forum or visit your Private Page straight ahead!</Typography>
        <Typography variant='h6'>(You can also navigate with navigation bar at the top of page)</Typography>
        <Grid>
          <ButtonGroup variant='contained' className='mainButtons'>
            <Button color='secondary' onClick={() => navigate("/forum")}>Forum</Button>
            <Button color='primary' onClick={() => navigate("/schedule")}>Private Page</Button>
          </ButtonGroup>  
        </Grid>
    </div>
  )
}

export default MainPage