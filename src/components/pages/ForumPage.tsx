import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import PostList from '../PostList'

const ForumPage: FC = () => {
  return (
    <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant='h3' style={{}}>Forum</Typography>
        <Typography variant='h5' style={{padding: 5}}>Here you can find most interested topics of the school community</Typography>
        <PostList />
    </Grid>
  )
}

export default ForumPage