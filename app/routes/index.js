import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tomsters: this.store.findAll('tomster'),
      tags: this.store.findAll('tag')
    )}
  },
  actions: {
    tomStore(params) {
      var newTomster = this.store.createRecord('tomster', params);
      newTomster.save();
      this.transitionTo('index');
    }
  }
});
