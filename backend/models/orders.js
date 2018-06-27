var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var OrderSchema = new Schema({
  id: Number,
  carpetID: Number,
  userID: Number,
  date:Date,
});

mongoose.model('Order', OrderSchema);
