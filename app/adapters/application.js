import DS from 'ember-data';
//default with the name application
export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000'//,

});
