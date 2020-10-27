const mongoose = require('../config/user_db_connection');
const Schema = mongoose.Schema;
const Lang_Text = require('./LangaugeText')

let Post = new Schema({
    post_title: Lang_Text,
    post_text : Lang_Text,
    post_img: String
});
module.exports = mongoose.model('Post', Post);