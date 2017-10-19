import Controller from '@ember/controller';
import { alias } from '@ember/object/computed'

export default Controller.extend({
  messages: alias('model'), 
  actions: {
    sendMsg() {
      let msg = this.get('msg');
      let messages = this.get('messages');

      messages.pushObject({
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
