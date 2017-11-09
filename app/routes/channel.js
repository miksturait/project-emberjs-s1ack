import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.store.find('channel', params.channel_id)
  }
});
