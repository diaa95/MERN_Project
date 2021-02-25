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
import { navigate } from "@reach/router";
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
        {!this.state.clicked ? (
          <button onClick={this.generateCode}>Submit</button>
        ) : (
          <button onClick={this.reset}>Reset</button>
        )}
        <ScriptTag type="text/javascript" id={"code"}>
          {this.state.script}
        </ScriptTag>
        <Animation clicked={this.state.clicked} />
        <div id="blockly_animation">
          <BlocklyComponent
            ref={this.simpleWorkspace}
            readOnly={false}
            trashcan={true}
            media={"media/"}
            move={{
              scrollbars: true,
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
    );
  }
}

export default AnimationFirstLevel;
