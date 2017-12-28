import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemon', { path: '/pokemon/:limit' }, function() {
    this.route('view', { path: '/view/:pokemon_id' });
    this.route('edit', { path: '/edit/:pokemon_id' });
    this.route('new');
  });
});

export default Router;
