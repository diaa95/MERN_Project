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

import React from 'react';

import BlocklyComponent, { Block } from '../Blockly';

import BlocklyJS from 'blockly/javascript';

import './../blocks/customblocks';
import './../generator/generator';
import ScriptTag from 'react-script-tag';
import Animation from "./Animation";

class FirstLevel extends React.Component {
    constructor(props) {
        super(props);
        this.simpleWorkspace = React.createRef();
        this.state = {script: ''};
    }

    generateCode = () => {
        document.getElementById("form").submit();
    }
    submitHandler = (e) =>{
        e.preventDefault();
        var code = BlocklyJS.workspaceToCode(
            this.simpleWorkspace.current.workspace
        );
        document.getElementById("code").innerHTML += code;
        // console.log(e.target.code.value);
        console.log(this.state);
        this.setState({script: code});

    }
    moveForward = ()=>{
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form id={'form'} onSubmit={ this.submitHandler}>
                    <ScriptTag type="text/javascript" id="code">
                    </ScriptTag>
                    <button type={'submit'}>Convert</button>
                </form>
                <Animation/>
                <BlocklyComponent ref={this.simpleWorkspace}
                                  readOnly={false} trashcan={true} media={'media/'}
                                  move={{
                                      scrollbars: true,
                                      drag: true,
                                      wheel: true
                                  }}
                                  initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
                                                             <block type="Maze_moveForward" x="0" y="0"></block></xml>`}>
                    <Block type="Maze_moveForward" />
                    <Block type="maze_turn" />
                    <Block type="maze_if" />
                    <Block type="maze_ifElse" />
                    <Block type="maze_forever" />
                </BlocklyComponent>
            </div>
        );
    }
}

export default FirstLevel;
