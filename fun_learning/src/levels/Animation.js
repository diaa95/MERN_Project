import React from 'react';
import ScriptTag from 'react-script-tag';
import Down1 from '../static/img/down1.png'
import Right1 from '../static/img/right1.png'
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        top: "0",
        left: "0",
        height: "500px",
        width: "500px",
        display: "Grid",
        gridTemplateColumns: "repeat(10, 60px)",
        gridTemplateRows: "repeat(10, 90px)",

        // flexDirection: "column",
    },
    cardContent: {
        flexGrow: 1,
    },
    divClass:{
        outline: "1px solid black"
    }
}));
const Animation =(props)=>{
    const classes = useStyles();

    const styles ={
        position : {
            height: "90px",
            width:"60px",
            gridArea: '2/3/3/4',
            backgroundImage: "url('/img/right1.png')",
            backgroundRepeat: 'no-repeat'

        }
    }
        return (
            <div>
                <div id="background">

                    <div className={classes.card}>
                        <div id={"character"} style={styles.position}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>
                        <div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div><div className={classes.divClass}></div>

                    </div>
                </div>
            </div>
        );
}

export default Animation;
