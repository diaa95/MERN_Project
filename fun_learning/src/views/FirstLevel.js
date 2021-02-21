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
import Header from "./Header";
import ReactBlockly from 'react-blockly'
import Blockly from 'blockly';

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
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  fillHeight: {
    height: "calc(80vh - 150px)",
    width: "calc(80vh - 150px)"
}
}));

const cards = [1, 2, 3];

export default function Album(props) {
  const classes = useStyles();
  const { user, logout } = props;

  const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = [
    {
      name: 'Logic',
      colour: '#5C81A6',
      blocks: [
        {
          type: 'controls_if'
        },
        {
          type: 'logic_compare'
        }
      ]
    },
    {
      name: 'Math',
      colour: '#5CA65C',
      blocks: [
        {
          type: 'math_round'
        },
        {
          type: 'math_number'
        }
      ]
    },
    {
      name: 'Colour',
      colour: '#5CA699',
      blocks: [
        {
          type: 'colour_picker'
        },
        {
          type: 'colour_rgb'
        },
      ]
    }
  ]
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById('generated-xml').innerText = newXml;

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header user={user} logout={logout} />

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            First Level
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Our website aims to teach your child how to think logically, to
            prepare a powerful coder for the Future!
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}></Grid>
      </Container>
      <div>
        <ReactBlockly
            toolboxCategories={toolboxCategories}
            initialXml={initialXml}
            wrapperDivClassName={classes.fillHeight}
            workspaceConfiguration={{
              grid: {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true,
              },
            }}
            workspaceDidChange={workspaceDidChange}
        />
        <pre id="generated-xml"/>
        <textarea id="code" style={{ height: "200px", width: "400px" }} value=""/>
      </div>
      <Footer />
    </React.Fragment>
  );
}
