var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CarpetSchema = new Schema({
  id: Number,
  name: String,
  size: Number,
  uom: String,
  price: Number,
  currency:  String,
  material:  String,
  item_number:  Number,
  url:  String,
});

module.exports = mongoose.model('carpets', CarpetSchema);
