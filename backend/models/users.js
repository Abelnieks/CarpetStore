var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  id:Number,
   user: String,
  name: String,
  password: String,
 email:String,
 adress: String,
 country: String,

 });

module.exports = mongoose.model('users', UserSchema);
