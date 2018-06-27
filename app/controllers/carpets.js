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
			window.alert(carpet + " tika pievienots");
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
    },

    filtername() {

    let n = this.get('Name');
		//console.log(name);
    let self = this;
		var model = this.get('model');
    	//this.store.peekAll('carpet').filter((carpets) =>
			this.store.findRecord('carpet', n).then((carpet) =>{
				alert(carpet.get('name'));






      });

    },

    deletecarpet(destroyId) {

      ///let destroyId = this.get('destroyId');
      //let carpet = this.get('model').findBy('_id', destroyId);
			console.log(destroyId);
			window.alert("Veiksīgi izdzēsts");
      destroyId.destroyRecord();
    },
		updatecarpet(carpet) {
console.log(carpet.get('name'));
			let name = prompt("jaunais nosaukums", carpet.get('name'));
			if (name != null){
		carpet.set('name', name)
			}
				let price = prompt("jaunā cena",carpet.get('price'));
				if (price != null){
					carpet.set('price', price)
				}
				let material = prompt("jaunais meteriāls",carpet.get('material'));
				if (material != null){
						carpet.set('material', material)
				}
				let size = prompt("jaunais izmērs",carpet.get('size'));
				if (size != null){
								carpet.set('size', size)
				}
				let foto = prompt("jaunais foto",carpet.get('url'));
				if (foto != null){
								carpet.set('url', foto)
				}

			carpet.save();

		}
}
});
