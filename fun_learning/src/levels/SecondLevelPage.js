import React from "react";
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

  // const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml"><block type="lists_create_with" id="X*O*/n^|$]7:xiM4UNdj" x="140" y="125"><mutation items="0"></mutation></block></xml>`;

  const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`;

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
        },
        {
          fields: {
            BOOL: "TRUE",
          },
          type: "logic_boolean",
        },
        {
          type: "logic_null",
        },
        {
          type: "logic_ternary",
        },
      ],
    },
    {
      name: "Loops",
      colour: "#5CA65C",
      blocks: [
        {
          values: {
            TIMES: {
              fields: {
                NUM: "10",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "controls_repeat_ext",
        },
        {
          fields: {
            MODE: "WHILE",
          },
          type: "controls_whileUntil",
        },
        {
          fields: {
            VAR: "i",
          },
          values: {
            FROM: {
              fields: {
                NUM: "1",
              },
              type: "math_number",
              shadow: true,
            },
            TO: {
              fields: {
                NUM: "10",
              },
              type: "math_number",
              shadow: true,
            },
            BY: {
              fields: {
                NUM: "1",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "controls_for",
        },
        {
          fields: {
            VAR: "j",
          },
          type: "controls_forEach",
        },
        {
          fields: {
            FLOW: "BREAK",
          },
          type: "controls_flow_statements",
        },
      ],
    },
    {
      name: "Math",
      colour: "#5C68A6",
      blocks: [
        {
          fields: {
            OP: "ROUND",
          },
          values: {
            NUM: {
              fields: {
                NUM: "3.1",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_round",
        },
        {
          fields: {
            NUM: "0",
          },
          type: "math_number",
        },
        {
          fields: {
            OP: "ROOT",
          },
          values: {
            NUM: {
              fields: {
                NUM: "9",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_single",
        },
        {
          fields: {
            OP: "SIN",
          },
          values: {
            NUM: {
              fields: {
                NUM: "45",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_trig",
        },
        {
          fields: {
            CONSTANT: "PI",
          },
          type: "math_constant",
        },
        {
          mutation: {
            attributes: {
              divisor_input: "false",
            },
          },
          fields: {
            PROPERTY: "EVEN",
          },
          values: {
            NUMBER_TO_CHECK: {
              fields: {
                NUM: "0",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_number_property",
        },
        {
          fields: {
            OP: "ADD",
          },
          values: {
            A: {
              fields: {
                NUM: "1",
              },
              type: "math_number",
              shadow: true,
            },
            B: {
              fields: {
                NUM: "1",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_arithmetic",
        },
        {
          mutation: {
            attributes: {
              op: "SUM",
            },
          },
          fields: {
            OP: "SUM",
          },
          type: "math_on_list",
        },
        {
          values: {
            DIVIDEND: {
              fields: {
                NUM: "64",
              },
              type: "math_number",
              shadow: true,
            },
            DIVISOR: {
              fields: {
                NUM: "10",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_modulo",
        },
        {
          values: {
            VALUE: {
              fields: {
                NUM: "50",
              },
              type: "math_number",
              shadow: true,
            },
            LOW: {
              fields: {
                NUM: "1",
              },
              type: "math_number",
              shadow: true,
            },
            HIGH: {
              fields: {
                NUM: "100",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_constrain",
        },
        {
          values: {
            FROM: {
              fields: {
                NUM: "1",
              },
              type: "math_number",
              shadow: true,
            },
            TO: {
              fields: {
                NUM: "100",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "math_random_int",
        },
        {
          type: "math_random_float",
        },
      ],
    },
    {
      name: "Text",
      colour: "#5CA68D",
      blocks: [
        {
          mutation: {
            attributes: {
              at: "true",
            },
          },
          fields: {
            WHERE: "FROM_START",
          },
          values: {
            VALUE: {
              fields: {
                VAR: "text",
              },
              type: "variables_get",
              shadow: false,
            },
          },
          type: "text_charAt",
        },
        {
          fields: {},
          type: "text",
        },
        {
          fields: {
            VAR: "item",
          },
          values: {
            TEXT: {
              fields: {},
              type: "text",
              shadow: true,
            },
          },
          type: "text_append",
        },
        {
          values: {
            VALUE: {
              fields: {
                TEXT: "abc",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "text_length",
        },
        {
          values: {
            VALUE: {
              fields: {},
              type: "text",
              shadow: true,
            },
          },
          type: "text_isEmpty",
        },
        {
          fields: {
            END: "FIRST",
          },
          values: {
            VALUE: {
              fields: {
                VAR: "text",
              },
              type: "variables_get",
              shadow: false,
            },
            FIND: {
              fields: {
                TEXT: "abc",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "text_indexOf",
        },
        {
          mutation: {
            attributes: {
              items: "2",
            },
          },
          type: "text_join",
        },
        {
          mutation: {
            attributes: {
              at1: "true",
              at2: "true",
            },
          },
          fields: {
            WHERE1: "FROM_START",
            WHERE2: "FROM_START",
          },
          values: {
            STRING: {
              fields: {
                VAR: "text",
              },
              type: "variables_get",
              shadow: false,
            },
          },
          type: "text_getSubstring",
        },
        {
          fields: {
            CASE: "UPPERCASE",
          },
          values: {
            TEXT: {
              fields: {
                TEXT: "abc",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "text_changeCase",
        },
        {
          fields: {
            MODE: "BOTH",
          },
          values: {
            TEXT: {
              fields: {
                TEXT: "abc",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "text_trim",
        },
        {
          values: {
            TEXT: {
              fields: {
                TEXT: "abc",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "text_print",
        },
        {
          mutation: {
            attributes: {
              type: "TEXT",
            },
          },
          fields: {
            TYPE: "TEXT",
          },
          values: {
            TEXT: {
              fields: {
                TEXT: "abc",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "text_prompt_ext",
        },
      ],
    },
    {
      name: "Lists",
      colour: "#745CA6",
      blocks: [
        {
          fields: {
            END: "FIRST",
          },
          values: {
            VALUE: {
              fields: {
                VAR: "list",
              },
              type: "variables_get",
              shadow: false,
            },
          },
          type: "lists_indexOf",
        },
        {
          mutation: {
            attributes: {
              items: "0",
            },
          },
          type: "lists_create_with",
        },
        {
          values: {
            NUM: {
              fields: {
                NUM: "5",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "lists_repeat",
        },
        {
          type: "lists_length",
        },
        {
          type: "lists_isEmpty",
        },
        {
          mutation: {
            attributes: {
              items: "3",
            },
          },
          type: "lists_create_with",
        },
        {
          mutation: {
            attributes: {
              statement: "false",
              at: "true",
            },
          },
          fields: {
            MODE: "GET",
            WHERE: "FROM_START",
          },
          values: {
            VALUE: {
              fields: {
                VAR: "list",
              },
              type: "variables_get",
              shadow: false,
            },
          },
          type: "lists_getIndex",
        },
        {
          mutation: {
            attributes: {
              at: "true",
            },
          },
          fields: {
            MODE: "SET",
            WHERE: "FROM_START",
          },
          values: {
            LIST: {
              fields: {
                VAR: "list",
              },
              type: "variables_get",
              shadow: false,
            },
          },
          type: "lists_setIndex",
        },
        {
          mutation: {
            attributes: {
              at1: "true",
              at2: "true",
            },
          },
          fields: {
            WHERE1: "FROM_START",
            WHERE2: "FROM_START",
          },
          values: {
            LIST: {
              fields: {
                VAR: "list",
              },
              type: "variables_get",
              shadow: false,
            },
          },
          type: "lists_getSublist",
        },
        {
          mutation: {
            attributes: {
              mode: "SPLIT",
            },
          },
          fields: {
            MODE: "SPLIT",
          },
          values: {
            DELIM: {
              fields: {
                TEXT: ",",
              },
              type: "text",
              shadow: true,
            },
          },
          type: "lists_split",
        },
        {
          fields: {
            TYPE: "NUMERIC",
            DIRECTION: "1",
          },
          type: "lists_sort",
        },
      ],
    },
    {
      name: "Colour",
      colour: "#A6745C",
      blocks: [
        {
          fields: {
            COLOUR: "#ff0000",
          },
          type: "colour_picker",
        },
        {
          type: "colour_random",
        },
        {
          values: {
            RED: {
              fields: {
                NUM: "100",
              },
              type: "math_number",
              shadow: true,
            },
            GREEN: {
              fields: {
                NUM: "50",
              },
              type: "math_number",
              shadow: true,
            },
            BLUE: {
              fields: {
                NUM: "0",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "colour_rgb",
        },
        {
          values: {
            COLOUR1: {
              fields: {
                COLOUR: "#ff0000",
              },
              type: "colour_picker",
              shadow: true,
            },
            COLOUR2: {
              fields: {
                COLOUR: "#3333ff",
              },
              type: "colour_picker",
              shadow: true,
            },
            RATIO: {
              fields: {
                NUM: "0.5",
              },
              type: "math_number",
              shadow: true,
            },
          },
          type: "colour_blend",
        },
      ],
    },
    {
      name: "Variables",
      colour: "#A65C81",
      custom: "VARIABLE",
    },
    {
      name: "Functions",
      colour: "#9A5CA6",
      custom: "PROCEDURE",
    },
  ];
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById("generated-xml").innerText = newXml;

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").value = code;
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
            If Statement Level
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            <p className="level-description">
              What is an if statement?
              <br />
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

      <pre id="generated-xml" />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value=""
      />

      {/* <br />
      <pre id="generated-xml" />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value=""
      /> */}
      <Footer />
    </React.Fragment>
  );
}
