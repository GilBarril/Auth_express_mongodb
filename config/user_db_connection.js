var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users',{useNewUrlParser: true, useUnifiedTopology: true });
module.exports = exports = mongoose;