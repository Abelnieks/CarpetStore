var mongoose = require('mongoose'),
carpet = require('../models/carpets.js'); //Mongoose automatically looks for the plural version of your model name.
mongoose.connect('mongodb://localhost:27017/paklajs');



exports.findAll = function(req, res) {
  carpet.find({},function(err, results) {
     console.log(results);
    return res.send({carpet:results});
  });
};

exports.add = function(req, res) {
  console.log("body --------------------------------------------------");
  console.log(req.body.carpet);

    var carpetObj = {};
      carpetObj.id= Math.floor(Math.random() * 100000);
    if(req.body.carpet.name) {     carpetObj.name= req.body.carpet.name;  }
  else {carpetObj.name = 'defaultName';}

     carpetObj.size= req.body.carpet.size;
       carpetObj.price= req.body.carpet.price;
       carpetObj.material= req.body.carpet.material;
      carpetObj.url= req.body.carpet.url;
      carpetObj.currency = "Eur";


       carpetObj.item_number="20";
       carpetObj.uom = "m";



    //short version, but still might cause problems with "falsy" values

    console.log(carpetObj);
    //carpet.insert(carpetObj);
    //^ would work if no id is needed back. We need it, so we are using save with a callback
    carpet.create(carpetObj, function (err, small) {
      if (err){
 		return handleError(err);}
    carpet.findOne({'name':carpetObj.name, 'price':carpetObj.price},function(err, results){
      console.log(results);
  	let temp = {};
  	temp.carpet = results;
      return res.send(temp);
  });

});
};
exports.findbyid = function(req, res) {
  console.log(" Find by Id");
  console.log(req.body);
  console.log('***********************');
  console.log(req.params.id);
  var id = req.params.id || '1';
  carpet.findOne({'id': id},function(err, results){
    console.log(results);
	let temp = {};
	temp.carpet = results;
    return res.send(temp);
  });
};
exports.findbyname = function(req, res) {
  console.log(" Find by name");
  console.log(req.params);
  console.log('***********************');
  console.log(req.params.name);
  var name = req.params.name || '1';
  carpet.find({'name': name},function(err, results){
    console.log(results);
  let temp = {};
  temp.carpet = results;
    return res.send(temp);
  });
};
exports.update = function(req, res) {
  console.log("update");
console.log(req.body.carpet.name);
  var findingQuery = {'id':req.params.id};
  var newvalues = {$set: {
   name: req.body.carpet.name,
   price: req.body.carpet.price,
   material: req.body.carpet.material,
 size: req.body.carpet.size,
url: req.body.carpet.url}};// will set specific fields to given values
  carpet.updateOne(findingQuery, newvalues, function(err, res) {
      if (err) throw err;

      console.log("1 document updated");

  });

};





exports.delete = function(req, res) {
  console.log(" delete");
  console.log(req.params);

    var query = {'id': req.params.id};
    carpet.remove(query ,function(err, results) {
      //console.log(results);
      return res.send(results);
    });

};


exports.findMaterial= function(req, res) {
  console.log(" Find by material");
  console.log(req.params);
  console.log('***********************');
  console.log(req.params.material);
  var material = req.params.material || '1';
  carpet.find({'material': material},function(err, results) {
     console.log(results);
    return res.send({carpet:results});
  });
};
