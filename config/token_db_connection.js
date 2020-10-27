var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tokens',{useNewUrlParser: true, useUnifiedTopology: true });
module.exports = exports = mongoose;