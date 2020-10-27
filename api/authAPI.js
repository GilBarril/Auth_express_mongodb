const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const tokenAPI = require('./tokenAPI')

exports.login = (req,res) => {
    User.findOne({'user_email': req.body.username}).exec((err, user) =>{
        if(!user){
            return res.status(401).send("Invalid user or password.");
        }
        else{    
            bcrypt.compare(req.body.password, user.user_password, function (err, result){
                if(result){
                    return res.status(200).set({'AUTHORIZATION':"Bearer "+tokenAPI.createToken(user)}).send("OK")
                }
                else{
                    return res.status(401).send("Invalid user or password.");
                }
            });
        }
    });
};

exports.logout = (req,res) => {
    return res.status(200).set({'AUTHORIZATION':"Bearer "+tokenAPI.revokeToken()}).send("OK")
    
};
