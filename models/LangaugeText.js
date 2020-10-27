const mongoose = require('../config/lang_text_db_connection');
const Schema = mongoose.Schema;

let Lang_Text = new Schema({
    lang: {type: Object, required: true},
    value: {type: Object, required:true}
});
module.exports = mongoose.model('Lang_Text', Lang_Text);