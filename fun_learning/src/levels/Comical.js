import FirstLevelPage from "./FirstLevelPage";
import SecondLevelPage from "./SecondLevelPage";
import ThirdLevelPage from "./ThirdLevelPage";
import { Router } from "@reach/router";
import React from "react";
import { connect } from "react-redux";

const Comical = (props) => {
  const upgrade = (result) => {
    let x = result.split("field");
    console.log(x[3]);
    if (x[3] === ' name="NUM">10</') {
      let newUser = { ...props.user };
      newUser.score.comic += 1;
      props.upgrade(newUser);
    }
  };

  const Upgrade = (result) => {
    if (
      result ===
      '<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_if" id="0Kbe7SWQIqlwjZc8Zk!R" x="107" y="30"><value name="IF0"><block type="text_isEmpty" id="*jxZF_QCakaII6Pq67M7"><value name="VALUE"><shadow type="text" id="@377;^is73raceb4YQ~F"><field name="TEXT">cat</field></shadow></value></block></value><statement name="DO0"><block type="text_print" id="ZNKreuMs^U*a^p45w$XJ"><value name="TEXT"><shadow type="text" id="4~=@;^vMTI3B9V}V]7)}"><field name="TEXT">milk</field></shadow></value></block></statement><next><block type="controls_if" id="*Zhi/Aq:39zeWn8KDm4E"><value name="IF0"><block type="text_isEmpty" id="h:i00(s8_%B)3VL=)1Ez"><value name="VALUE"><shadow type="text" id="^Xhm^|]I@J[%v*1(A+Ar"><field name="TEXT">dog</field></shadow></value></block></value><statement name="DO0"><block type="text_print" id="@=Ss*tN];u1=f*W)/aP%"><value name="TEXT"><shadow type="text" id="7n66Y2jM0wxshEjLqwro"><field name="TEXT">bone</field></shadow></value></block></statement><next><block type="controls_if" id="P]]dd!(YDXVc80P?i]B*"><value name="IF0"><block type="text_isEmpty" id=")sCW6nN=}GWTYoDqV3oE"><value name="VALUE"><shadow type="text" id="NG`EX=/D%GCWWjAkuOx@"><field name="TEXT">rabit</field></shadow></value></block></value><statement name="DO0"><block type="text_print" id="|l`.y)M3sGOz9Wcux[2?"><value name="TEXT"><shadow type="text" id="-i[Ss0x;ow/n)dDbWPTe"><field name="TEXT">carrot</field></shadow></value></block></statement></block></next></block></next></block></xml>'
    ) {
      let newUser = { ...props.user };
      newUser.score.comic += 1;
      props.upgrade(newUser);
    }
  };
  return (
    <>
      {props.user.score.comic === 1 ? (
        <FirstLevelPage
          Upgrade={upgrade}
          user={props.user}
          logout={props.logout}
        />
      ) : props.user.score.comic === 2 ? (
        <SecondLevelPage
          Upgrade={Upgrade}
          user={props.user}
          logout={props.logout}
        />
      ) : props.user.score.comic === 3 ? (
        <ThirdLevelPage user={props.user} logout={props.logout} />
      ) : (
        <h1>You are ready!</h1>
      )}
    </>
  );
};
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
export default connect(mapStateToProps, mapDispatchToProps)(Comical);
