module.exports = function(app){
 var painters = require('./controllers/painters');
    app.get('/painters', painters.findAll);
    app.get('/painters/id', painters.findById);
    app.get('/painters/style', painters.findByStyle);
    app.post('/painters/add', painters.add);
    app.post('/painters/update', painters.update);
    app.post('/painters/delete', painters.delete);



 var users = require('./controllers/users');
    app.get('/users',users.findAll);
    app.post('/users/add', users.add);
    app.post('/users', users.update);
    app.post('/users/delete', users.delete);
    app.post('/users/:id', users.findById);
    app.get('/users/:id', users.findById);
    
    var carpets = require('./controllers/carpets');
       app.get('/carpets',carpets.findAll);
       app.post('/carpets/add', carpets.add);
       app.post('/carpets', carpets.update);
       app.post('/carpets/delete', carpets.delete);
       app.post('/carpets/:id', carpets.findById);
       app.get('/carpets/:id', carpets.findById);

var joined = require('./controllers/joined');
    app.get('/joined/dwarf', joined.findFirst);

    app.get('/hello', function(req, res) {
	    res.send('Hello User, please use the correct file structure! \n');
    });
};
