import Controller from '@ember/controller';
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'

export default Controller.extend({
  db: service(),
  messages: alias('model'), 
  actions: {
    sendMsg() {
      let msg = this.get('msg');
      let db = this.get('db');

      db.add('messages', {
          author: {
            nick: 'cs3b',
            avatarUrl: '/images/people/cs3b.png'
          },
          time: '4:32 PM',
          content: msg
      })

      this.set('msg', '');
    }
  },
});
