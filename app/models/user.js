import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  profession: DS.attr('string'),
  //artstyle: DS.array(),
  ledit: DS.attr('string')//,
  //_id: DS.attr('string')//,
  //id: DS.attr('string')
});
