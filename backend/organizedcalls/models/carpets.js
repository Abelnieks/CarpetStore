var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var carpetSchema = new Schema({
  id: Number,
  name: String,
  size: Number,
  uom: String,
  price: Number,
  currency:  String,
  material:  String,
  item_number:  Number,
  url:  String

});
mongoose.model('carpets', carpetSchema);
