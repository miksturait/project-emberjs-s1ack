import Controller from '@ember/controller';
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'

export default Controller.extend({
  store: service(),
  messages: alias('model'), 
  actions: {
    sendMsg() {
      let msg = this.get('msg');
      let store = this.get('store');


      store.createRecord('message', {
          author: {
            nick: 'cs3b',
            avatarUrl: '/images/people/cs3b.png'
          },
          time: new Date(),
          content: msg
      }).save();

      this.set('msg', '');
    }
  },
});
