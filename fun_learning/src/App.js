import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./views/Dashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { navigate, Router } from "@reach/router";
import axios from "axios";
import Home from "./views/Home";
import { connect } from "react-redux";


const App = (props) => {
  // const [registered, setRegistered] = useState(false);
  // const [user, setUser] = useState({});

  // const cookies = new Cookies();

  // useEffect(() => {
  //   if (cookies.get("user")) {
  //     const user = cookies.get("user");
  //     setUser(user);
  //   } else setUser({});
  // }, [registered]);

  // const allowHandler = (user) => {
  //   axios
  //     .get("http://localhost:8000/api/" + user._id, { withCredentials: true })
  //     .then((response) => {
  //       cookies.set("user", response.data);
  //       setRegistered(() => true);
  //     })
  //     .catch((error) => console.log("There was an issue: ", error));
  // };

  const logout = () => {
    axios
        .post(
            "http://localhost:8000/api/logout",
            { logOut: "logout" },
            { withCredentials: true }
        )
        .then(() => {
          props.logout();
        })

  };

  return (
      <div className="App">
        {!props.user._id ? (
            <>

              <Router>
                <Home path={"/"} />
                <Registration path={"/register"} />
                <Login path={"/login"} />
              </Router>
            </>
        ) : (
            <Dashboard user={props.user} path={"/dashboard"} logout={logout} />
        )}
      </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOG_OUT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
