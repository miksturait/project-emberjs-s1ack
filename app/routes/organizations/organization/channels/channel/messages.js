import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
export default Route.extend({
  model() {
    let channel = this.modelFor('organizations.organization.channels.channel');
    set(this,'channel', channel);
    return get(channel,'messages');
  },

  setupController(controller, model) {
    this._super(controller, model);
    set(controller,'channel', this.channel)
  }
});
