module.exports = function(app){

 var users = require('./controllers/users');
    app.get('/users',users.findAll);
    app.post('/users', users.add);
    app.delete('/users', users.delete);
    app.patch('/users/:id', users.update);
    app.put('/users/:id', users.findbyid);
    app.delete('/users/:id', users.delete);
 var carpets = require('./controllers/carpets');
  app.post('/carpets', carpets.add);
  app.get('/carpets',carpets.findAll);
    app.delete('/carpets/:id', carpets.delete);
    app.put('/carpets/:id', carpets.update);
    app.get('/carpets/:id', carpets.findbyid);
    app.get('/carpets/:name', carpets.findbyname);

};
