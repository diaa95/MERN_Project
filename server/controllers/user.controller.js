const {User}=require("../models/user.models")
const jwt = require("jsonwebtoken");
require('dotenv').config()
const bcrypt = require('bcrypt');

module.exports.register= (req, res) => {
    const bob = new User(req.body);
    bob.save()
    .then(user => {
        const payload = {
            id: user._id
        };
        const userToken =  jwt.sign(payload, process.env.SECRET_KEY)
        res.cookie("usertoken", userToken,  { 
            httpOnly: true
        }).json({ msg: "success!", user: user});
    })
    .catch(err => res.status(400).json(err));
}

module.exports.getAllUsers=(req,res) =>{
    User.find()
    .then(all =>res.json(all))
    .catch(err =>res.json(err));
}

module.exports.findOneUser=(req,res) =>{
    User.findOne({_id:req.params.id}).populate("books")
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

module.exports.removeAll = (req, res)=>{
    User.remove()
    .then(deletedUsers => {
        res.json({'sucsess': "succesfully deleted all users"})
    })
    .catch(err => res.json(err));
}

module.exports.login=async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user === null) {
        // email not found in users collection
        return res.status(401).json({'error': "user not found"});
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        // password wasn't a match!
        return res.status(401).json({'error': "password is incorrect!"});
    }
    // if we made it this far, the password was correct
    const payload = {
        id: user._id
    };
    const userToken =  jwt.sign(payload, process.env.SECRET_KEY)

    // note that the response object allows chained calls to cookie and json
    res.cookie("usertoken", userToken, {
        httpOnly: true
    })
    .json({ msg: "success!" , user: user});
}

module.exports.logout = (req, res) => {
    // console.log(req.headers);
    console.log('kkkkkkkkkkk');
    res.clearCookie("usertoken");
    res.sendStatus(200);
}
