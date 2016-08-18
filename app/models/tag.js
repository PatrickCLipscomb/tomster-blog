import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  tomsters: DS.hasMany('tomster', {async: true})
});
