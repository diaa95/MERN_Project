import FirstLevelPage from "./FirstLevelPage";
import SecondLevelPage from "./SecondLevelPage";
import ThirdLevelPage from "./ThirdLevelPage";
import {Router} from "@reach/router";
import React from "react";
import {connect} from "react-redux";

const Comical = (props) =>{
    const upgrade =(result)=>{

        console.log(result);
        if(result === '<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="s,o~Fq{.WT1~Gtn24*]}">Steps</variable></variables><block type="variables_set" id="-b+C,,dSEh3D,jP\`w9M/" x="247" y="68"><field name="VAR" id="s,o~Fq{.WT1~Gtn24*]}">Steps</field><value name="VALUE"><block type="math_number" id="[m:I.YlMsrtyL?b9q/RU"><field name="NUM">10</field></block></value></block></xml>'){
            let newUser = {...props.user};
            newUser.score.comic +=1;
            props.upgrade(newUser);
        }

    }
     return(
         <>
             {props.user.score.comic ===1?
                 <FirstLevelPage Upgrade={upgrade}
                 user={props.user}
                 logout={props.logout}
             />:props.user.score.comic ===2?
                 <SecondLevelPage
                 user={props.user}
                 logout={props.logout}
                 />:props.user.score.comic ===3?
                 <ThirdLevelPage
                 user={props.user}
                 logout={props.logout}
                 />:<h1>You are ready!</h1>
             }
         </>
     )
};
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
export default connect(mapStateToProps, mapDispatchToProps)(Comical)
