import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: "0 !important",
    backgroundColor: "#ebcd8f !important",
    margin:0
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
          Code is Language teaches children how to communicate and teaches logical thinking. Language also strengthens both verbal and and written skills.  Children should be exposed to different languages at an early age. It helps them to understand the world around them better. Coding has a language all its own.
        </Typography>
      </Container>
    </div>
  );
};

export default Description;
