import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('tag', params.tag_id)
  },
  actions: {
    tomStore(params) {
      var newTomster = this.store.createRecord('tomster', params);
      var tag = params.tag;
      tag.get('tomsters').addObject(newTomster);
      newTomster.save().then(function() {
        return tag.save();
      });
      this.transitionTo('tag', params.tag);
    }
  }
});
