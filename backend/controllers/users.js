var mongoose = require('mongoose'),
user = require('../models/users.js'); //Mongoose automatically looks for the plural version of your model name.
mongoose.connect('mongodb://localhost:27017/paklajs');



exports.findAll = function(req, res) {
  user.find({},function(err, results) {
     console.log(results);
    return res.send({user:results});
  });
};



exports.add = function(req, res) {
  console.log("body --------------------------------------------------");
  console.log(req.body.user);

    var userObj = {};
      userObj.id= Math.floor(Math.random() * 100000);
      if(req.body.user.user) {     userObj.user= req.body.user.user;  }
    else {userObj.user = 'defaultUserName';}
    if(req.body.user.name) {     userObj.name= req.body.user.name;  }
  else {userObj.name = 'defaultName';}
  if(req.body.user.password) {     userObj.name= req.body.user.password;  }
  else {userObj.password = 'pass123';}

     userObj.email= req.body.user.email;
       userObj.adress= req.body.user.adress;
       userObj.country= req.body.user.country;


    //short version, but still might cause problems with "falsy" values

    console.log(userObj);
    //user.insert(userObj);
    //^ would work if no id is needed back. We need it, so we are using save with a callback
    user.create(userObj, function (err, small) {
      if (err){
 		return handleError(err);}
      return res.send(userObj);
    });

};


exports.update = function(req, res) {
  console.log("update");
  console.log(req.params);
  var findingQuery = {'id':req.params.id};
  var newvalues = {$set: { user: req.params.user,
   name: req.params.name,
   password: req.params.password,
   email: req.params.email,
   adress: req.params.adress,
   country: req.params.country}};// will set specific fields to given values
  user.updateOne(findingQuery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
  });
};


exports.delete = function(req, res) {
  console.log(" delete");
  console.log(req.params);

    var query = {'id': req.params.id};
    user.remove(query ,function(err, results) {
      //console.log(results);
      return res.send(results);
    });

};
exports.findbyid = function(req, res) {
  console.log(" Find by Id");
  console.log(req.params);
  console.log('***********************');
  console.log(req.params.id);
  var id = req.params.id || '1';
  user.findOne({'id': id},function(err, results){
    console.log(results);
	let temp = {};
	temp.user = results;
    return res.send(temp);
  });
};
