var mongoose = require('mongoose'),
paklajs = mongoose.model('paklaji'); //Mongoose automatically looks for the plural version of your model name.

exports.findAll = function(req, res) {
  paklajs.find({},function(err, results) {
	  let temp = {};
	  temp.data = results[0];
	  console.log(temp);
    return res.send(temp);
  });
};

exports.findById = function(req, res) {
  console.log(" Find by Id");
  console.log(req.body);
  console.log('***********************');
  console.log(req.params.id);
  var id = req.params.id || '1';
  paklajs.findOne({'id': id},function(err, results){
    console.log(results);
	let temp = {};
	temp.user = results;
    return res.send(temp);
  });
};
