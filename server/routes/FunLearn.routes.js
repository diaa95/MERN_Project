const UserController = require("../controllers/user.controller")
const {authenticate} =require("../config/jwt.config")
module.exports = app =>{
    app.post("/api/register",UserController.register);
    app.get("/api/allUsers", authenticate, UserController.getAllUsers);
    app.get("/api/:id", authenticate, UserController.findOneUser);
    app.post("/api/login", UserController.login);
    app.post("/api/removeAll", UserController.removeAll);
    app.post("/api/logout", UserController.logout);
}
