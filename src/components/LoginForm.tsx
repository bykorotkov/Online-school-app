import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import LoginIcon from '@mui/icons-material/Login';

const LoginForm:FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = (e:any) => {
        e.preventDefault()
        login(username, password)
    }

  return (
    <div>
    <Box
      component="form"
      sx={{p: 2
      }}
      style={{backgroundColor:'#e4d3f5', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
      onSubmit={submit}
    >
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Typography sx={{mb: 2}} variant='h5'>Please Log In to use our service</Typography>
      <TextField id="outlined-basic" label="First Name" placeholder='Enter your First Name' variant="outlined" required value={username} onChange={e => setUsername(e.target.value)}/>
      <br />
      <TextField id="outlined-basic" label="Password" placeholder='Enter your password' variant="outlined" required value={password} type={'password'} onChange={e => setPassword(e.target.value)}/>
      <br />
      <Button startIcon={<LoginIcon />} type="submit" variant="contained">Submit</Button>
    </Box>
    </div>
  )
}

export default LoginForm