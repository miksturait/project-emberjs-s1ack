import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('organizations', function() {
    this.route('organization', { path: '/:organization_id'}, function() {
      this.route('channels', { path: '/' }, function() {
        this.route('channel', { path: '/:channel_id' }, function() {
          this.route('messages');
        });
      });
    });
  });
  this.route('profile');
});

export default Router;
