import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tomsters: this.store.findAll('tomster'),
      tags: this.store.findAll('tag')
    })
  },
  actions: {
    save(params) {
      var newTag = this.store.createRecord('tag', params);
      newTag.save();
      this.transitionTo('index')
    }
  }
});
