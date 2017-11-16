import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let channel = this.modelFor('organizations.organization.channels.channel');
    this.set('channel', channel);
    return channel.get('messages');
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('channel', this.channel)
  }
});
