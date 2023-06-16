import EmberRouter from '@ember/routing/router';
import config from 'anne-greeth/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('in-opdracht');
  this.route('kaartjes');
});
