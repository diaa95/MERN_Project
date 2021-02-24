import React from "react";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DashboardMain from "../static/img/dashboard_main.jpg";
import Variable from "../static/img/variable_icon.png";
import If from "../static/img/if_icon.png";
import Loop from "../static/img/loop_icon.png";
import Header from "./Header";
import Description from "./LevelsDescription";
import Level from "./Level";
import {navigate} from "@reach/router";
import CardForLevel from "./CardForLevel"
// import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: "0 !important",
    backgroundColor: "#ebcd8f !important",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  dashboardMain:{
    margin:"0",
    padding:"0"
  }
}));

const clickHandler = () => {
  navigate("/firstLevel");
};

export default function Album(props) {
  const classes = useStyles();
  const { user, logout } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Header user={user} logout={logout} />
     
      <main>
        {/* Hero unit */}
        <Button
          className="get-started"
          variant="contained"
          color="primary"
          onClick={clickHandler}
        >
          Get Started
        </Button>
        <img className="dashboardMain" src={DashboardMain} />
        <Description />
        <CardForLevel/>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          
          <Grid container spacing={4}>
            <Level
              image={Variable}
              title="Level1"
              description="description1"
              redirect="/firstLevel"
            />
            <Level
              image={If}
              title="Level2"
              description="description2"
              redirect="/secondLevel"
            />
            <Level
              image={Loop}
              title="Level3"
              description="description3 "
              redirect="/thirdLevel"
            />
          </Grid>
        </Container>
      </main>
     
      <Footer />
    </React.Fragment>
  );
}
