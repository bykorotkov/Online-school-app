import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUserProps } from '../models/IUser'

const UserIdPage = () => {
    const params = useParams()
    const [users, setUsers] = useState<IUserProps>()
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get<IUserProps>(
            `https://62f13c1f25d9e8a2e7c8a54c.mockapi.io/Students/` + params.id
        ).then((response) => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    borderRadius: '10px',
                    backgroundColor: 'LightSteelBlue',
                    mt: 10,
                    p: 5,
                }}
            >
                <Typography variant="h2">
                    You opened the page with id {params.id}
                </Typography>
                <Typography variant="h4">{users?.name}</Typography>
                <Typography variant="h6">
                    <img src={users?.avatar}></img>
                </Typography>
                <Typography variant="h6">
                    {users?.id}. Email is: {users?.email}.
                </Typography>
                <Typography variant="h6">
                    Phone number: {users?.phone}
                </Typography>
                <Typography>
                    Additional info: <br />
                    {users?.parag}
                </Typography>
                <Button
                    onClick={() => navigate('/schedule')}
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Back
                </Button>
            </Box>
        </div>
    )
}

export default UserIdPage
