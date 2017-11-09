import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  session: service(),
  messages: alias('model'), 
  actions: {
    sendMsg() {
      let session = this.get('session');

      if (!session.get('isAuthenticated')) {
       alert('Please log in first');
       return false;
      }

      let msg = this.get('msg');
      let store = this.get('store');

      let message = store.createRecord('message', {
          author: session.get('currentUser'),
          time: new Date(),
          content: msg
      })
      message.save();

      this.set('msg', '');
    }
  },
});
