var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lang_text',{useNewUrlParser: true, useUnifiedTopology: true });
module.exports = exports = mongoose;