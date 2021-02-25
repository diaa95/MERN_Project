import React from 'react'
import {connect} from 'react-redux'
import AnimationFirstLevel from './AnimationFirstLevel'
import Button from "@material-ui/core/Button";
import FirstLevelPage from "./FirstLevelPage";

const  AnimationGuide=(props)=> {

const upgrade =()=>{
    let newUser= {...props.user};
    newUser.score.animation +=1;
    props.upgrade(newUser)

}

    return (
        <div>
            {/*<Button style={{display: "inline-block"}} onClick={upgrade}>Upgrade</Button>*/}
            {
                props.user.score.animation===1 ?<AnimationFirstLevel user={props.user} logout={props.logout} />
            :<h1>You are ready</h1>}

        </div>
    )
};
const mapStateToProps = state => {
    return {
        user: state.user
    };
};


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({type: "LOG_OUT"}),
        upgrade: (user) => dispatch({type: "UPGRADE", user: user})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AnimationGuide)
