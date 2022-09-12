import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import ReadMoreIcon from '@mui/icons-material/ReadMore'

const PostList: React.FC = () => {
    const { error, limit, loading, page, posts } = useTypedSelector(
        (state) => state.post
    )
    const { fetchPosts, setPostPage } = useActions()
    const navigate = useNavigate()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchPosts(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div
                style={{
                    backgroundColor: 'lightGray',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '700px',
                    padding: 15,
                    borderRadius: 10,
                }}
            >
                <Typography variant="h4">
                    List of <span>Posts</span>{' '}
                </Typography>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            padding: 15,
                            backgroundColor: 'Silver',
                            borderRadius: '5px',
                            margin: 5,
                            border: '1px black solid',
                        }}
                    >
                        <Typography>
                            {post.id}. {post.title}. {post.username} . Timestamp
                            - {post.time}.{' '}
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<ReadMoreIcon />}
                                style={{ padding: 4, margin: 0, minWidth: 50 }}
                                onClick={() => navigate(`/forum/${post.id}`)}
                            ></Button>
                        </Typography>
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    margin: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {pages.map((p) => (
                    <Button
                        key={p}
                        variant="outlined"
                        onClick={() => setPostPage(p)}
                        style={{
                            background: 'white',
                            border:
                                p === page
                                    ? '2px solid blue'
                                    : '1px solid gray',
                            padding: 10,
                            marginRight: 10,
                        }}
                    >
                        {p}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default PostList
