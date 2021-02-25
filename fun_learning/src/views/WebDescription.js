import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: "0 !important",
    backgroundColor: "#ebcd8f !important",
    margin: 0,
  },
  kidImage:{
    float:"left"
  },
  firstImage:{
    float:"right"
  }
}));

const Description = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Young Coder
        </Typography>
        <Typography variant="h6" align="left" color="textSecondary" paragraph>
          Code is Language teaches children how to communicate and teaches
          logical thinking. Language also strengthens both verbal and and
          written skills. Children should be exposed to different languages at
          an early age. It helps them to understand the world around them
          better. Coding has a language all its own.
          <img className={classes.firstImage}  src="/img/secondImage.png"/>

        </Typography>
        <Typography variant="h6" align="left" color="textSecondary" paragraph>
        When it comes to preparing your kids for the future, there are few better ways than learning to code! Valuable, if not necessary in the 21st century, coding for kids helps them develop academically, building perseverance and organization, skills that can translate into a career.
        <br />
        <br /><br /><br />
        <img className={classes.kidImage}  src="/img/codingMadeEasy.png"/>

        <strong>Coding Improves Academic Performance</strong><br />

        <ul>
          <li> <strong> Math</strong>: Coding teaches kids to visualize abstract concepts, lets them apply math to real-world situations, and makes math fun and creative!</li>
          <li><strong> Writing: </strong>Kids who code understand the value of concision and planning, which results in better writing skills. Many kids even use Tynker as a medium for storytelling!</li>
          <li><strong> Creativity:</strong> Kids learn through experimentation and strengthen their brains when they code, allowing them to embrace their creativity.</li>
        </ul>
        </Typography >



        <br />
        <br />
      </Container>
    </div>
  );
};

export default Description;
