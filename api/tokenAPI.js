var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/environment');
const Token = require('../models/Token')

exports.createToken = (user) => {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(5, "minute").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};


exports.revokeToken = (req,res)=> {
   var payload = {
    exp: expireIn(-10) //-10 mins expired
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};
