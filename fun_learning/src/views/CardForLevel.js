import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper,Grid } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    grid:{
        width:'100%',
        margin:'0px',
        height:'50%',
        backgroundColor:theme.palette.success.main

    },
    paper:{
        padding:theme.spacing(2),
        backgroundColor:theme.palette.success.light,
        color:theme.palette.text.secondary
    }


}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
      <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={12}>
              <Paper className={classes.paper}><strong >Level 1:</strong> In most programming languages, a variable is a container that holds information that you can access.In computer programming, a variable has a name and contains a value </Paper>
          </Grid>
          <Grid item xs={12}>
              <Paper className={classes.paper}><strong >level 2:</strong> In many programming languages, decisions (also called conditionals) take the form of an if-then construct. They start with a condition, which is then evaluated as either True or False.</Paper>
          </Grid>
          <Grid item xs={12}>
              <Paper className={classes.paper}><strong >level 3:</strong>Sometimes we want to repeat things a certain number of times, but we want to keep track of values as we do. This is where a “for loop” comes in handy.</Paper>
          </Grid>
         

      </Grid>
   
  );
}
