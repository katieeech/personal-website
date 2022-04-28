import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // overrides: {
  //     MuiAppBar: {
  //       root: {
  //         backgroundColor: 'black'
  //       },
  //       regular: {
  //           backgroundColor: 'black'
  //         }
  //     }
  //   },
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// Custom code from me

// const barTheme = createTheme({

// overrides: {
//   MuiToolBar: {
//     root: {
//       backgroundColor: 'black'
//     },
//     regular: {
//         backgroundColor: 'black'
//       }
//   }
// }

//   });

// MuiTab: {
//     root: {
//       minWidth: 0,
//       '@media (min-width: 0px)': {
//         minWidth: 0
//       }
//     }
//   }

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    toolbar: {
      color: "white",
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(1),
        backgroundColor: "purple",
      },
      [theme.breakpoints.between("sm", "md")]: {
        marginTop: theme.spacing(3),
        backgroundColor: "white",
      },
      "@media (min-width: 1280px)": {
        marginTop: theme.spacing(5),
        backgroundColor: "white",
      },
    },
  }));

  const classes = useStyles();

  return (
    // <MuiThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ background: "white" }}
        elevation={0}
      >
        {/* <Toolbar style={{ color: 'purple' }}  > */}
        <Toolbar style={{ color: "purple" }} className={classes.toolbar}>
          {/* , padding: '0.7em 1.3em 1.3em'  */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <h1 className="navbar-title">KATIE H CHOI | 최 혜 원</h1>

          <Typography variant="h6" noWrap component="div">
            {/* Persistent drawer */}
          </Typography>
          {/* <div className="box-navbar"> */}
          <Box className="navbar-btn-container">
            {/* <Button
              variant="outlined"
              color="inherit"
              style={{ margin: "0 0.3em", fontWeight: "bold" }}
              onClick={() =>
                window.open(
                  "https://hyewonchoi.notion.site/hyewonchoi/44ac003d3beb4c00b494de8144a69f2c"
                )
              }
            >
              이력서
            </Button> */}
            <Button
              variant="outlined"
              color="inherit"
              style={{ margin: "0 0.3em", fontWeight: "bold" }}
              onClick={() => window.open("https://frontendhyeni.tistory.com/2")}
            >
              Portfolio
            </Button>
            {/* <Button
              variant="outlined"
              color="inherit"
              style={{ margin: "0 0.3em", fontWeight: "bold" }}
              onClick={() => window.open("mailto:hyewonchoi31@gmail.com")}
            >
              email
            </Button> */}
            <Button
              variant="outlined"
              color="inherit"
              style={{ margin: "0 0.3em", fontWeight: "bold" }}
              onClick={() => window.open("https://github.com/katieeech")}
            >
              github
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ margin: "0 0.3em", fontWeight: "bold" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/katiehchoi/")
              }
            >
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
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
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <ListItem button key="Intro" onClick={handleDrawerClose}>
              <ListItemText primary="K.C" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
            <ListItem button key="About" onClick={handleDrawerClose}>
              <ListItemText primary="About" />
            </ListItem>
          </Link>

          <Link to="/work" style={{ textDecoration: "none", color: "#000" }}>
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
          <Link to="/studio" style={{ textDecoration: "none", color: "#000" }}>
            <ListItem button key="Studio" onClick={handleDrawerClose}>
              <ListItemText primary="Studio" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
    // </MuiThemeProvider >
  );
}
