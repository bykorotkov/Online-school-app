import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
    const {users, loading, error, page, limit} = useTypedSelector(state => state.user)
    const {fetchUsers, setUserPage} = useActions()
    const pages = [1,2,3,4,5,6,7,8,9]
    const navigate = useNavigate()
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    useEffect(() => {
        (fetchUsers(page, limit))
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const boxSX = {
        "&:hover": {
          border: "1px solid white",
          color: 'black',
          margin:'-1px',
          backgroundColor: 'white',
          cursor:'pointer',
          borderRadius: '5px',
          boxShadow: '0 0 0 2px #d0d0d0'
        },
      };
      const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
  return (
    <div>
        <Typography variant='h5' sx={{fontWeight: 'medium', letterSpacing: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>List of Students</Typography>
        {users.map(user => 
            <Grid sx={boxSX} key={user.id} style={{display: 'flex', alignItems: 'center'}}><img src={user.avatar} style={{maxWidth: 50}}></img>
              <Typography onClick={() => navigate(`/users/${user.id}`)} sx={{padding: 1, width: 330}} key={user.id}>{user.id}. {user.name}<br />{user.email}. <br />{user.phone}</Typography>
            </Grid>
        )}
            {/* <Modal
            sx={{opacity: '1'}}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      1
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
          
    </div>
  )
}

export default UserList