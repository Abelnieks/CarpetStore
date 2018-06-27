var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  user: String,
  name: String,
  password: String,
  profession: String,
  address: String,
  coutry: String

});
mongoose.model('users', UserSchema);
