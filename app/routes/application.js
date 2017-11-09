import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  store: service(),
  session: service(),

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {
    return this.store.findAll('channel');
  },
  actions: {
    signIn: function() {
      this.get('session').open('firebase', { provider: 'google'})
      .then(function(data) {
        console.log(data.currentUser);
      })
      .catch((error) => console.log(error));
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
