const UserController = require("../controllers/user.controller")
const {authenticate} =require("../config/jwt.config")
module.exports = app =>{

    //this method registers a new user to the database
    //then saves the userToken in the cookie under "usertoken"
    //and responses with json containing success msg under "msg" and user object under "user"
    app.post("/api/register",UserController.register);

    //this method loges in an already registered user
    //then saves the userToken in the cookie under "usertoken"
    //and responses with json containing success msg under "msg" and user object under "user"
    app.post("/api/login", UserController.login);

    //this method clears the userToken from cookies
    app.post("/api/logout", UserController.logout);

    //this method retrieves json containing all users in the database
    //Can't be access if not logged in
    app.get("/api/allUsers", authenticate, UserController.getAllUsers);

    //this method retrieves json containing one specific user
    //accepts user _id under as request params
    //Can't be access if not logged in
    app.get("/api/:id", authenticate, UserController.findOneUser);

    //this is for development purposes only
    //removes all users in the database
    app.post("/api/removeAll", UserController.removeAll);

}
