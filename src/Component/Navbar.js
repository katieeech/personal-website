import * as React from 'react';
import { Link } from "react-router-dom"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft() {


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        // <MuiThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ background: 'white' }} elevation={0}>
                <Toolbar style={{ color: 'purple', padding: '0.7em 1.3em 1.3em' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <p>KATIE.H.CHOI</p>

                    <Typography variant="h6" noWrap component="div">
                        {/* Persistent drawer */}
                    </Typography>
                    {/* <div className="box-navbar"> */}
                    <Box className="box-navbar">
                        <Button variant="outlined" color="inherit" style={{ margin: '0 0.3em', fontWeight: 'bold' }}
                            onClick={() => window.open('mailto:hyewonchoi31@gmail.com')}
                        >
                            email
                        </Button>
                        <Button variant="outlined" color="inherit" style={{ margin: '0 0.3em', fontWeight: 'bold' }} onClick={() => window.open('https://github.com/katiehyewonchoi')}>
                            github
                        </Button>
                        <Button variant="outlined" color="inherit" style={{ margin: '0 0.3em', fontWeight: 'bold' }}
                            onClick={() => window.open('https://www.linkedin.com/in/katiehchoi/')}>
                            linkedin
                        </Button>
                    </Box>
                    <div className="toolbar-bottom"></div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                // variant="persistent"
                anchor="left"
                open={open}
                onClose={() => handleDrawerClose()}
                BackdropProps={{ invisible: true }}

            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <Link to="/intro" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItem button key="Intro" onClick={handleDrawerClose} >
                            <ListItemText primary="Welcome" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/about" style={{ textDecoration: 'none', color: '#000' }} >
                        <ListItem button key="About" onClick={handleDrawerClose}>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>

                    <Link to="/work" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItem button key="Work" onClick={handleDrawerClose}>
                            <ListItemText primary="Work" />
                        </ListItem>
                    </Link>

                    {/* {['About', 'Work', 'Studio'].map((text, index) => (
                        <Link to="/studio" style={{ textDecoration: 'none' }}>
                            <ListItem button key={text} >
                              
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))} */}
                </List>
                <Divider />
                <List>
                    <Link to="/studio" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItem button key="Studio" onClick={handleDrawerClose} >
                            <ListItemText primary="Studio" />
                        </ListItem>
                    </Link>
                    <Link to="/archive" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItem button key="Archive" onClick={handleDrawerClose}>
                            <ListItemText primary="Archive" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box >
        // </MuiThemeProvider >
    );
}