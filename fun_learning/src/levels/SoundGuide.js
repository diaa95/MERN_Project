import React from "react";
import { connect } from "react-redux";
import ScriptTag from "react-script-tag";
import Animation from "./Animation";
import BlocklyComponent, { Block, Value, Shadow, Field } from "../Blockly";
import BlocklyJS from "blockly/javascript";
import Button from "@material-ui/core/Button";
import Header from "../views/Header";
import Footer from "../views/Footer";

class SoundGuide extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.state = { script: "", clicked: false };
  }
  generateCode = () => {
    fetch("sound.txt")
      .then((r) => r.text())
      .then((text) => {
        let code = text;

        code += BlocklyJS.workspaceToCode(
          this.simpleWorkspace.current.workspace
        );
        code += "console.log(MusicMaker.queue_);";
        code += "MusicMaker.play();";
        code += "console.log(MusicMaker.queue_);";
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
        <Header user={{ firstName: "Young Coder" }} logout="LogOut" />
        {!this.state.clicked ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button style={{ margin: "2%" }} onClick={this.generateCode}>
              Submit
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button onClick={this.reset}>Reset</Button>
          </div>
        )}
        <ScriptTag type="text/javascript" id={"code"}>
          {this.state.script}
        </ScriptTag>
        <p style={{ margin: "3%" }} className="hint">
          Enjoy playing with the following blocks. <br />
          Build your amazing note.
        </p>

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
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}
        >
          <Block type="play_sound" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">5</Field>
              </Shadow>
            </Value>
          </Block>
        </BlocklyComponent>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "LOG_OUT" }),
    upgrade: (user) => dispatch({ type: "UPGRADE", user: user }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SoundGuide);
