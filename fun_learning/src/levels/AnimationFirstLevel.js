/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from "react";

import BlocklyComponent, { Block } from "../Blockly";

import BlocklyJS from "blockly/javascript";

import "./../blocks/customblocks";
import "./../generator/generator";
import ScriptTag from "react-script-tag";
import Animation from "./Animation";

import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import Header from "../views/Header";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import ScriptText from "../../public/script.txt";

class AnimationFirstLevel extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.state = { script: "", clicked: false };
  }

  generateCode = () => {
    fetch("script.txt")
      .then((r) => r.text())
      .then((text) => {
        let code = text;

        code += BlocklyJS.workspaceToCode(
          this.simpleWorkspace.current.workspace
        );
        console.log(code);
        this.setState({ script: code, clicked: true });
      });
  };
  reset = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Header user={this.props.user} logout={this.props.logout} />
        <Container maxWidth="md">
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
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            <img src="/img/textCoding.png" style={{ float: "right" }}></img>
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
              Build the blocks in a way to let the ninja reaching the dojo.
            </p>
          </Typography>
        </Container>
        <ScriptTag type="text/javascript" id={"code"}>
          {this.state.script}
        </ScriptTag>
        <div id={"blockly_animation_container"}>
          <div>
            <Animation clicked={this.state.clicked} />
          </div>
          <div id={"blockly_animation_sub"}>
            <BlocklyComponent
              ref={this.simpleWorkspace}
              readOnly={false}
              trashcan={true}
              media={"media/"}
              move={{
                scrollbars: false,
                drag: true,
                wheel: true,
              }}
              initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
                                                                                 <block type="Maze_moveForward" x="0" y="0"></block></xml>`}
            >
              <Block type="Maze_moveForward" />
              <Block type="maze_turn" />
              <Block type="maze_if" />
              <Block type="maze_ifElse" />
              <Block type="maze_forever" />
            </BlocklyComponent>
          </div>
        </div>
        {!this.state.clicked ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button onClick={this.generateCode}>Submit</Button>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button onClick={this.reset}>Reset</Button>
          </div>
        )}
      </div>
    );
  }
}

export default AnimationFirstLevel;
