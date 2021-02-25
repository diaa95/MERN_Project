import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Logo from "../static/img/logo.png";
import connect from "react-redux";

const useStyles = makeStyles((theme) => ({
  /*  title: {
    flexGrow: 1,
  }, */
}));
const Header = (props) => {
  const classes = useStyles();
  const logOut = () => {
    props.logout();
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <img className="logo" src={Logo} />
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Welcome , {props.user.firstName}
        </Typography>
        {props.logout ? (
          <Button
            className="logoutButton"
            variant="contained"
            color="primary"
            onClick={logOut}
          >
            Log Out
          </Button>
        ) : (
          <>
            <Button className="loginBigButton" variant="contained">
              <Link className="loginButton" href={"/login"}>
                Sign In
              </Link>
            </Button>
            <Button variant="outlined" className="secondary-button">
              <Link className="registrationButton" href={"register"}>
                Create Account
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
