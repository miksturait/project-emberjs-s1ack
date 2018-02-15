import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { get } from '@ember/object';

export default Route.extend({
  store: service(),
  session: service(),

  beforeModel: function() {
    return get(this,'session').fetch().catch(() => this._terminate() );
  },
  model() {
    return this.store.findAll('channel');
  },
  actions: {
    signIn() {
      get(this,'session').open('firebase', { provider: 'google'})
      .then((data) => this._printUser(data))
      .catch((error) => this._printError(error));
    },
    signOut() {
      get(this,'session').close();
    }
  },
  _printUser(data) {
    return console.log(data.currentUser);
  },
  _printError(data) {
    return console.log(data);
  },
  _terminate() {
    return {};
  }
});
