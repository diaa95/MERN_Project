import React from 'react'
import Header from "./Header";
import Link from "@material-ui/core/Link";


const Home =() =>{
    const user = {firstName : 'visitor'}
    return(
        <>
            <Header user={user}/>
        </>
    );

}
export default Home;