import React from "react";
import {connect} from 'react-redux';
import ScriptTag from "react-script-tag";
import Animation from "./Animation";
import BlocklyComponent, { Block, Value, Shadow, Field } from '../Blockly';
import BlocklyJS from "blockly/javascript";


class SoundGuide extends React.Component {

    constructor(props) {
        super(props);
        this.simpleWorkspace = React.createRef();
        this.state = {script: "", clicked: false};
    }
    generateCode = () =>{
        fetch("sound.txt")
            .then((r)=>r.text())
            .then((text)=> {
                let code = text;

                code += BlocklyJS.workspaceToCode(
                    this.simpleWorkspace.current.workspace
                );
                code += "console.log(MusicMaker.queue_);"
                code += "MusicMaker.play();"
                code += "console.log(MusicMaker.queue_);"
                console.log(code);
                this.setState({script: code, clicked: true});
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.generateCode}>Submit</button>
                <ScriptTag type="text/javascript" id={"code"}>{this.state.script}</ScriptTag>
                <p className ="hint">Tap any button to edit its code. <br/>When complete, press Done.</p>

                    <BlocklyComponent ref={this.simpleWorkspace}
                                      readOnly={false} trashcan={true} media={'media/'}
                                      move={{
                                          scrollbars: true,
                                          drag: true,
                                          wheel: true
                                      }}
                                      initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
                        <Block type="play_sound"/>
                        <Block type="controls_repeat_ext">
                            <Value name="TIMES">
                                <Shadow type="math_number">
                                    <Field name="NUM">5</Field>
                                </Shadow>
                            </Value>
                        </Block>
                    </BlocklyComponent>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({ type: "LOG_OUT" }),
        upgrade: (user) => dispatch({type: "UPGRADE", user: user})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SoundGuide);
