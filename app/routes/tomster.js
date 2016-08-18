import Ember from 'ember';

export default Ember.Route.extend({
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
    },
    deleteTomster(tomster) {
      var comment_deletions = tomster.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return tomster.destroyRecord();
      });
      this.transitionTo('index');
    },
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
