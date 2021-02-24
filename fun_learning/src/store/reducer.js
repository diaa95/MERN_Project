import Cookies from "universal-cookie";
import {navigate} from "@reach/router";

const cookies = new Cookies();
const initialState = {
    user: (cookies.get("user"))?(cookies.get("user")):{}
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "LOG_IN":
            newState.user = action.user;
            cookies.set("user", action.user);
            break;

        case "LOG_OUT":
            cookies.remove("user", { path: "/" });
            newState.user = {};
            navigate("/login");
            break;
        case "UPGRADE":
            newState.user = action.user;
            cookies.set("user", newState.user);
            break;
        
        
    }

    return newState;
};

export default reducer;
