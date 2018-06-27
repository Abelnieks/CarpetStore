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
	//	id: idField,
		size: size,
		price: price,
		material: material,
		url: url
		//artstyle: art
      });
      newRecord.save();
    },
    readCrpet() {
		   // var set = this.set.bind(this, 'model');
		let findID = this.get('findID');
		let self = this;
		this.store.findRecord('carpet', findID).then((dwarf) => {
        alert(dwarf.get('title') + ' ' + dwarf.get('id'));
		//let model = this.modelFor('carpet');
		//let model = this.get('controller.model');
		// console.log(model)); // for Get and Set
               //model.get('carpet');
        //       model.set(dwarf);
		// this.refresh();

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
