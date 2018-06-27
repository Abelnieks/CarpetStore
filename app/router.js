import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('carpets');
  this.route('about');
  this.route('contact');
  this.route('add');
  this.route('user');
});

export default Router;