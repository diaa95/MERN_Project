import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: "0 !important",
    backgroundColor: "#ebcd8f !important",
  },
}));

const Description = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Young Coder
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Our website aims to teach your child how to think logically, to
          prepare a powerful coder for the Future!
          
        </Typography>
      </Container>
    </div>
  );
};

export default Description;
