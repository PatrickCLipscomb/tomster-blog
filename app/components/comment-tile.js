import Ember from 'ember';

export default Ember.Component.extend({
  showCommentUpdate: false,
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    showComment() {
      this.set('showCommentUpdate', true);
    },
    updateComment(comment) {
      comment.save();
      this.set('showCommentUpdate', false);
    }
  }
});
