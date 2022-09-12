import { FC, useState } from 'react'
import UserList from '../UserList'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import {
    Button,
    Collapse,
    Divider,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import DiamondIcon from '@mui/icons-material/Diamond'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'

const Schedule: FC = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const boxSX = {
        '&:hover': {
            border: '1px solid white',
            color: 'black',
            margin: '-1px',
            opacity: 0.8,
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 0 0 2px #d0d0d0',
        },
    }

    const titleSX = {
        fontWeight: 'medium',
        letterSpacing: 0,
        margin: 1,
        backgroundColor: 'MistyRose',
        borderRadius: '10px',
        padding: '20px',
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h4" sx={titleSX}>
                    Welcome to your personal account!
                </Typography>
                <Grid
                    style={{
                        background: '#ADADC9',
                        padding: 10,
                        borderRadius: 10,
                        width: 400,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'medium',
                            letterSpacing: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Daily schedule
                    </Typography>
                    <UserList />
                </Grid>
            </div>

            <Grid
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 'auto',
                }}
            >
                <Typography variant="h4" sx={titleSX}>
                    Personal teacher's info part
                </Typography>
                <Grid>
                    <Grid
                        style={{
                            borderRadius: 10,
                            backgroundColor: 'lightBlue',
                            fontSize: 22,
                            width: 400,
                        }}
                    >
                        <Grid sx={boxSX} style={{ padding: '20px' }}>
                            <Typography variant="h6">
                                Lessons in this month
                            </Typography>
                            <Typography>8 out of 100</Typography>
                            <Typography>
                                Thank you for being with us!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <Grid
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'lightGray',
                                fontSize: 22,
                                marginTop: 10,
                            }}
                        >
                            <Grid sx={boxSX} style={{ padding: '20px' }}>
                                <Typography variant="h6">
                                    Lessons overall
                                </Typography>
                                <Typography>1390</Typography>
                                <Typography>You're awesome!</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'Aquamarine	',
                                fontSize: 22,
                                marginTop: 10,
                            }}
                        >
                            <Grid sx={boxSX} style={{ padding: '20px' }}>
                                <Typography variant="h6">
                                    Monetization
                                </Typography>
                                <Typography>$19020</Typography>
                                <Typography>11-13 august</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            borderRadius: 10,
                            backgroundColor: 'mistyRose',
                            fontSize: 22,
                            marginTop: 10,
                        }}
                    >
                        <Grid sx={boxSX} style={{ padding: '20px' }}>
                            <Typography variant="h6">
                                KPI
                                <Button
                                    startIcon={
                                        <InfoIcon titleAccess="This can be in progress for a while" />
                                    }
                                ></Button>
                            </Typography>
                            <hr />
                            <Grid
                                sx={{
                                    marginTop: 10,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <Button>
                                    <SignalCellularAltIcon />
                                </Button>
                                <Typography>Data is in progress!</Typography>
                                <Typography>It can take a few days</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            borderRadius: 10,
                            backgroundColor: 'PaleTurquoise',
                            padding: 20,
                            fontSize: 22,
                            marginTop: 10,
                        }}
                    >
                        <Grid>
                            <List>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <InfoIcon
                                            titleAccess="You can click and see all categories!"
                                            color="primary"
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            variant: 'h5',
                                            fontWeight: 'medium',
                                            letterSpacing: 0,
                                        }}
                                        primary="My students"
                                    />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Divider />
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'small',
                                            letterSpacing: 0,
                                        }}
                                        primary="Newcomers"
                                    />
                                </ListItemButton>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Aaron" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="James" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'small',
                                            letterSpacing: 0,
                                        }}
                                        primary="Crystal"
                                    />
                                </ListItemButton>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Anthony" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'small',
                                            letterSpacing: 0,
                                        }}
                                        primary="Sapphire"
                                    />
                                </ListItemButton>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Hoakin" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Quentin" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'small',
                                            letterSpacing: 0,
                                        }}
                                        primary="Emerald"
                                    />
                                </ListItemButton>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Jenny" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondIcon color="warning" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'small',
                                            letterSpacing: 0,
                                        }}
                                        primary="Ruby"
                                    />
                                </ListItemButton>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Andy" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiamondIcon color="error" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'small',
                                            letterSpacing: 0,
                                        }}
                                        primary="Diamond"
                                    />
                                </ListItemButton>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Felice" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Schedule
