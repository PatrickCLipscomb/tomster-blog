import Ember from 'ember';

export default Ember.Component.extend({
  showTomster: false,
  actions: {
    showTomsterForm() {
      this.set('showTomster', true)
    },
    tomStore() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        tag: this.get('tag')
      };
      this.set('showTomster', false);
      this.sendAction('tomStore', params);
    }
  }
});
