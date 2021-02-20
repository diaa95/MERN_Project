import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Badge, IconButton, makeStyles} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));
const Header = (props) => {
    const classes = useStyles();
    const logOut = () =>{
        props.logout();
    }
    return (
        <AppBar position="relative">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Welcome , {props.user.firstName}
          </Typography>
            {props.logout?<IconButton color="inherit">
                <Badge color="secondary" onClick={logOut}>
                    Log Out
                </Badge>
            </IconButton>:<>
            <IconButton color="inherit">
                <Link href={'/login'}>Login</Link>
            </IconButton>
            <IconButton color="inherit">
                <Link href={'register'}>Register</Link>
            </IconButton>
            </>
            }
        </Toolbar>
      </AppBar>
    )
}
export default Header
