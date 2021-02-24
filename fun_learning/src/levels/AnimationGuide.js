import React from 'react'
import {connect} from 'react-redux'
import AnimationFirstLevel from './AnimationFirstLevel'

const  AnimationGuide=(props)=> {

const upgrade =()=>{
    let newUser= {...props.user};
    newUser.score.animation +=1;
    props.upgrade(newUser)

}

    return (
        <div>
            <button onClick={upgrade}>Upgrade</button>
            {
                props.user.score.animation==1 ?<AnimationFirstLevel/>
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
        upgrade: (user) => dispatch({type: "UPGRADE", user: user})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AnimationGuide)
