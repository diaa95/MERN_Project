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
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Young Coder
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
          className="app-description"
        >
          <img
            src="/img/tynkerCodeBlocksPythonJavascript.png"
            style={{ float: "right" }}
          ></img>
          <br />
          <br />
          <br />
          Our website aims to teach your child how to think logically, to
          prepare a powerful coder for the Future!
          <br />
          First Level
          <br />
          This level will introduce you into a basic concepts of programming by
          a small challenges, the challenges will be provided with a set of
          steps, which will lead you to the solution.
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src="/img/learningToCode.png" style={{ float: "left" }}></img>
          <span>These concepts are:</span>
          <br />
          <ul>
            <li>
              In most programming languages, a variable is a container that
              holds information that you can access.In computer programming, a
              variable has a name and contains a value
            </li>

            <li>
              In many programming languages, decisions (also called
              conditionals) take the form of an if-then construct. They start
              with a condition, which is then evaluated as either True or False.
            </li>
            <li>
              Sometimes we want to repeat things a certain number of times, but
              we want to keep track of values as we do. This is where a “for
              loop” comes in handy.
            </li>
          </ul>
          <br />
          <br />
        </Typography>
      </Container>
    </div>
  );
};

export default Description;
