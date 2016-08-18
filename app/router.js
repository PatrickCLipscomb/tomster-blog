import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('article');
  this.route('tomster', {path: '/tomster/:tomster_id'});
  this.route('tag', {path: '/tag/:tag_id'});
});

export default Router;
