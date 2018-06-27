var mongoose = require('mongoose'),
carpet = mongoose.model('carpets'); //Mongoose automatically looks for the plural version of your model name.

exports.findAll = function(req, res) {
  carpet.find({},function(err, results) {
	  let temp = {};
	  temp.data = results[0];
	  console.log(temp);
    return res.send(temp);
  });
};

exports.add = function(req, res) {
  console.log("body --------------------------------------------------");
  console.log(req.body);
  if(req.body.carpetname && req.body.password){
    var carpetObj = new carpet;
    carpetObj.carpet= req.body.carpetname;
    //long version
    if(req.body.name) { carpetObj.name = req.body.name;  }
    else {carpetObj.name = 'defaultName';}
    //short version, but still might cause problems with "falsy" values
    carpetObj.password = req.body.password || "pass123";//obvious security flaw is obvious
    carpetObj.profession = req.body.profession || "miner";
    carpetObj.ledit= new Date().valueOf();

    console.log(carpetObj);
    //carpet.insert(carpetObj);
    //^ would work if no id is needed back. We need it, so we are using save with a callback
    carpet.create(carpetObj, function (err, small) {
      if (err){
		return handleError(err);}

      return res.send(carpetObj);
    });
  }else{
    //console.log("Wrong carpet info found in request:     ");
    //console.log(req);
    return res.send("Wrong carpet info found in request!");
  }
};


exports.update = function(req, res) {
  console.log("update");
  console.log(req.body);
  var findingQuery = {'id':req.params.id};
  var newvalues = {$set: {name: "NewDwarf", profession: "Baker", carpet:"dwarf12", ledit: new Date().valueOf()}};// will set specific fields to given values
  carpet.updateOne(findingQuery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
  });
};


exports.delete = function(req, res) {
  if(req.params.id){
    var query = {'id': req.body.id};
    carpet.remove(query ,function(err, results) {
      //console.log(results);
      return res.send(results);
    });
  }else{
      return res.send("Wrong carpet info found in request!");
  }
};


exports.findById = function(req, res) {
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
