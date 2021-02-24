import React, {useState} from "react";
import Footer from "../views/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../views/Header";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import Level1 from "../static/img/level1.png";

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
    height: "calc(80vh - 0px)",
    width: "calc(80vh + 100px)",
  },
}));

const cards = [1, 2, 3];

export default function Album(props) {
  const classes = useStyles();
  const { user, logout } = props;
  const [result, setResult] = useState("");

  const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="s,o~Fq{.WT1~Gtn24*]}">Steps</variable></variables><block type="variables_set" id="-b+C,,dSEh3D,jP\`w9M/" x="128" y="150"><field name="VAR" id="s,o~Fq{.WT1~Gtn24*]}">Steps</field><value name="VALUE"><block type="math_number" id="[m:I.YlMsrtyL?b9q/RU"><field name="NUM">0</field></block></value></block></xml>`;

  // const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`;

  const toolboxCategories = [
    {
      name: "Logic",
      colour: "#5C81A6",
      blocks: [
        {
          type: "controls_if",
        },
        {
          fields: {
            OP: "EQ",
          },
          type: "logic_compare",
        },
        {
          fields: {
            OP: "AND",
          },
          type: "logic_operation",
        },
        {
          type: "logic_negate",
        }
    ],
    }
  ]
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById("generated-xml").innerText = newXml;
    setResult(newXml);

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").value = code;

  }

  const submitHandler = (e)=>{
    e.preventDefault();
    props.Upgrade(result);
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
            Variable Level
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            <p className="level-description">
              What is a variable?
              <br />
              In coding world,we have something called a variable,it has a name
              and contains a value.
              <br />
              <br />
              Think about it as a box. If you labeled the box as Toys and put a
              yo-yo inside it, Toys will be like the variable name, and yo-yo is
              like value.
              <br />
              <br />
              Variable can store a single type of value. Usually these are
              numbers, text.
              <br />
              <br />
              The kind of value that a variable can hold is also called a data
              type. Now, let us look at 3 different data types – Numbers like
              (1,2,100,-345), Strings like ("young coder", "hello"), and
              Booleans like (true or false).
              <br />
              <br />
              Now we will have a small challenge, that will make our young
              programmer understands the concept of variable.
              <br />
              <br />
              These steps will help you:
              <br />
              <ol>
                <li>Click on Variable tab below</li>
                <li>Select create variable block</li>
                <li>Type steps in the box that pops up</li>
                <li>Select set steps to block</li>
                <li>Click math tab and choose block with the number zero</li>
                <li>Connect the new block to the first one</li>
                <li>
                  Count the number of the steps between squirrel and Hazelnut
                </li>
                <li>
                  Type the number of the steps inside the block that contains
                  zero
                </li>
              </ol>
            </p>
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}></Grid>
      </Container>

      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName={classes.fillHeight}
        /* workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true,
            },
          }} */
        workspaceDidChange={workspaceDidChange}
      />
      <img className="level-image" src={Level1} />

      <form onSubmit={(e)=>submitHandler(e)}>
       <textarea
            id="code"
            style={{ height: "200px", width: "400px" }}
            value=""
            onChange={(e)=>setResult(e.target.value)}
        />
        <button type={"submit"}>Submit</button>
      </form>
      <pre id="generated-xml" />
      <Footer />
    </React.Fragment>
  );
}
