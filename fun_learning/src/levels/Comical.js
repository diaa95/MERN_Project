import FirstLevelPage from "./FirstLevelPage";
import SecondLevelPage from "./SecondLevelPage";
import ThirdLevelPage from "./ThirdLevelPage";
import {Router} from "@reach/router";
import React from "react";
import {connect} from "react-redux";

const Comical = (props) =>{
    const upgrade =()=>{
        let newUser = {...props.user};
        newUser.score.comic +=1;
        props.upgrade(newUser);
    }
     return(
         <>
             {props.user.score.comic ===1?
                 <FirstLevelPage
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
             <button onClick={ upgrade }>Upgrade</button>
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
