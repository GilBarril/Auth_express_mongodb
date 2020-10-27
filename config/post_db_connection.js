var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/posts',{useNewUrlParser: true, useUnifiedTopology: true });
module.exports = exports = mongoose;