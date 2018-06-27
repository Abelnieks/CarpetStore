import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    createUser() {
      let user = this.get('newUser');
	  let pass = this.get('newPass');
	  let prof = this.get('newProfession');
	//  let art = this.get('newArtstyle');
	//  let idField = this.get('newID');
      let newRecord = this.store.createRecord('user', {
        user: user,
		name: user,
	//	id: idField,
		password: pass,
		profession: prof
		//artstyle: art
      });
      newRecord.save();
    },
    readUser() {
		   // var set = this.set.bind(this, 'model');
		let findID = this.get('findID');
		let self = this;
		this.store.findRecord('user', findID).then((dwarf) => {
        alert(dwarf.get('name') + ' ' + dwarf.get('id'));
		//let model = this.modelFor('user');
		//let model = this.get('controller.model');
		// console.log(model)); // for Get and Set
               //model.get('user');
        //       model.set(dwarf);
		// this.refresh();

      });
    },
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
    }
}
});
