import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTomster(tomster) {
      if(confirm("Really destroy this tomster??")) {
        this.sendAction('deleteTomster', tomster)
      }
    }
  }
});
