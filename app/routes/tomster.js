import Ember from 'ember';

export default Ember.Route.extend({
  tomster: null,
  model(params) {
    return this.store.findRecord('tomster', params.tomster_id);
  },
  actions: {
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var tomster = params.tomster;
      tomster.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return tomster.save();
      });
      this.transitionTo('tomster', params.tomster)
    }
  }
});
