import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    createCarpet() {
			 let carpet= this.get('newCarpet');
	  let size= this.get('newSize');
		 let price= this.get('newPrice');
		  let material= this.get('newMaterial');
			  let url= this.get('newUrl');

      let newRecord = this.store.createRecord('carpet', {
		name: carpet,
		size: size,
		price: price,
		material: material,
		url: url,


      });
				window.alert(carpet + " tika pievienots");
      newRecord.save();
    },
    readCrpet() {

		let findID = this.get('findID');
		let self = this;
		this.store.findRecord('carpet', findID).then((carpet) => {
        alert(carpet.get('title') + ' ' + carpet.get('id'));


      });
    }/*,
    updatecarpet() {
      // hard coding the id for demonstration purposes only
      let updatedTitle = this.get('updatedTitle');
      let game = this.get('carpet').findBy('id', '1');
      game.set('title', updatedTitle);
      game.save();
    },
    deletecarpet() {
      let destroyId = this.get('destroyId');
      let game = this.get('model').findBy('id', destroyId);
      game.destroyRecord();
    }*/
}
});
