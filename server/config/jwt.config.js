const jwt = require("jsonwebtoken");
require('dotenv').config()
 
module.exports.authenticate = (req, res, next) => {
    // console.log(req.headers.cookie);
    let mySubString = req.headers.cookie.split('usertoken=')[1].split(';')[0];

    // console.log(mySubString);
  jwt.verify(mySubString, process.env.SECRET_KEY, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}