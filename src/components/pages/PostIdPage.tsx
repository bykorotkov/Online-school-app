import { Button } from '@mui/material';
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import CommentList from '../CommentList'

interface PostIdPageParams {
  id: string,
}

const PostIdPage: FC = () => {
    const params = useParams<string>();

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center'}}>
        <h1>Post page with ID of {params.id}</h1>
        <CommentList />
    </div>
  )
}

export default PostIdPage