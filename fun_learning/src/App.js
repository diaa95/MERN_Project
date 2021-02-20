import React,{useEffect, useState} from 'react';
import './App.css';
import Dashboard from "./views/Dashboard";
import Login from './components/Login';
import Registration from './components/Registration';
import Cookies from 'universal-cookie';
import {navigate, Router} from '@reach/router'
import axios from 'axios'

function App() {
    const[registered,setRegistered]=useState(false)
    const[user,setUser]=useState({})

    const cookies = new Cookies();

    useEffect(()=>{
        if(cookies.get('user')){
            const user = cookies.get('user');
            setUser(user);
        } else
            setUser({});
    },[registered])

    const allowHandler=(user)=>{
        axios.get("http://localhost:8000/api/"+user._id,{ withCredentials: true })
            .then(response => {
                cookies.set('user',response.data);
                // setUser(user);
                setRegistered(() => true);
            })
            .catch(error => console.log("There was an issue: ", error))
    }

    const logout =()=>{

        axios.post('http://localhost:8000/api/logout',{logOut: "logout"},{ withCredentials: true })
            .then(() =>{
                cookies.remove('user', { path: '/' });
            })
            .then(() =>{
                setRegistered(()=>false);
                navigate('/');
            })
    }

    return (
        <div className="App">
            {!user._id?
                <>
                    <Router>
                        <Registration path={'/'} allow={allowHandler} />
                        <Login path={"/login"} allow={allowHandler} />
                    </Router>
                </>
                :<Dashboard user={user} logout={logout} />}
        </div>
    );
}

export default App;