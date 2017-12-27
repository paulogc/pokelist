import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemon-list');
  this.route('pokemon-detail');
  this.route('pokemon', function() {
    this.route('view');
    this.route('edit');
    this.route('new');
  });
});

export default Router;
