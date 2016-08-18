import Ember from 'ember';

export default Ember.Component.extend({
  showTag: false,
  actions: {
    showTagForm() {
      this.set('showTag', true)
    },
    save() {
      var params = {
        name: this.get('name')
      };
      this.set('showTag', false);
      this.sendAction('save', params);
    }
  }
});
