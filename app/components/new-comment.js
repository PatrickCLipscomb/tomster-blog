import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        text: this.get('text'),
        tomster: this.get('tomster')
      };
      this.sendAction('addComment', params);
    }
  }
});
