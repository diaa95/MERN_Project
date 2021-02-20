const express = require("express")
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();
const port = 8000;
require("./config/mongoose.config");
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./routes/FunLearn.routes")(app);
app.listen(port,() => console.log("The server is running on port: "+ port));
app.use(cookieParser());
// Change the app.use(cors()) to the one below