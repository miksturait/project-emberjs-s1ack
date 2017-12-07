import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  session: service(),
  actions: {
    sendMsg() {
      let session = this.get('session');

      if (!session.get('isAuthenticated')) {
       alert('Please log in first');
       return false;
      }

      let msg = this.get('msg');
      let store = this.get('store');
      let channel = this.get('channel')

      let message = store.createRecord('message', {
          author: session.get('currentUser'),
          channel,
          time: new Date(),
          content: msg
      })
      message.save();
      channel.save();

      this.set('msg', '');
    }
  },
});

