import React, { FC } from 'react'
import CommentList from '../CommentList'

const CommentPage: FC = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 900, padding: 10}}>
        <h1>Commentaries page</h1>
        <h2>Read the most popular commentaries</h2>
        <CommentList />
    </div>
  )
}

export default CommentPage