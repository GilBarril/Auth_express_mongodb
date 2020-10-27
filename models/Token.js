const mongoose = require('../config/token_db_connection');
const Schema = mongoose.Schema;
let Token = new Schema({
  token: String
});
module.exports = mongoose.model('Token', Token);