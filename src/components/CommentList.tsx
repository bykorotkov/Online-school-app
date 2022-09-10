import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const CommentList: React.FC = () => {
    const {comments, loading, error, page, limit} = useTypedSelector(state => state.comment)
    const {fetchComments, setCommentPage} = useActions()
    const pages = [1,2,3]

    useEffect(() => {
        fetchComments(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{backgroundColor: '#ADADC9', padding: 15, borderRadius: 10, marginTop: 100}}>
            <h2 style={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>Official list of Comments</h2>
            {comments.map(comment =>
                <div style={{padding: 3}} key={comment.id}>{comment.id} - {comment.name}. Email adress {comment.email}!</div>
            )}
            <div style={{display: 'flex', margin: 10, justifyContent:'center', alignItems:'center'}} >
                {pages.map(p => 
                    <Button variant='outlined' onClick={() => setCommentPage(p)} style={{background: 'white', border: p === page ? '2px solid blue' : '1px solid gray', padding: 10, margin: 10}}>
                        {p}
                    </Button>
                )}
            </div>
        </div>
    )
}
export default CommentList