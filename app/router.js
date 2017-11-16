import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('channel', { path: '/channel/:channel_id' }, function() {
    this.route('messages');
  });
  this.route('organizations');
});

export default Router;
