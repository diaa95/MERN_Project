import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Badge, IconButton, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

class NotificationsIcon extends React.Component {
    render() {
        return null;
    }
}

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
            <IconButton color="inherit">
                <Badge color="secondary" onClick={logOut}>
                    Log Out
                </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    )
}

export default Header
