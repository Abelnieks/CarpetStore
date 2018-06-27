import Ember from 'ember';

export default Ember.Route.extend({
  model() {
	   return this.store.findAll('user');
	 /* 
	  this.get('store').push({'data':[
		'id': 1,
		'type':'user',
		'attributes':
		{ "user":"user1",
		 "name" : "grumpy",
		  "password" : "dwarf1",
		  "profession" : "miner",
		//"artstyle": ["Abstract expressionism","Impressionism"],
		"ledit":"151672050900"
		 
	  },
        relationships: {}
	  ]
	  });*/
  }
});
