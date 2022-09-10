import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import LoginForm from '../LoginForm'

const Login: FC = () => {
  return (
    <div style={{marginTop: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <LoginForm />
    </div>
  )
}

export default Login