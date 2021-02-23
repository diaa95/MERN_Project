import React from 'react';
import ScriptTag from 'react-script-tag';
import Down1 from '../static/img/down1.png'
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        height: "20px",
        width:"20px",

    },
    cardContent: {
        flexGrow: 1,
    },
}));
const Animation =(props)=>{
    const classes = useStyles();
        return (
            <div>
                <div id="background">
                    <div id="character">x</div>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={Down1}
                            title={"Image title"}
                        />
                    </Card>
                </div>
                <ScriptTag type="text/javascript" id="code" src="script.js"/>
            </div>
        );
}

export default Animation;
