import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set, computed } from '@ember/object';

export default Component.extend({
  store: service(),
  session: service(),
  users: computed('channel.messages.@each', function() {
    return this.get('store').peekAll('user');
  }),
  userObjects: computed('users', function() {
    let users = this.get('users').map(user => {
      return user.getProperties('id', 'name');
    });
    return users;
  }),
  asyncConfig: computed('userObjects', function() {
    return {
      searchProperty: 'name',
      values: this.get('userObjects'),
    };
  }),
  actions: {
    sendMsg() {
      let session = get(this,'session');

      if (!get(session,'isAuthenticated')) {
       alert('Please log in first');
       return false;
      }

      let msg = get(this,'msg');
      let store = get(this,'store');
      let channel = get(this,'channel')

      let message = store.createRecord('message', {
          author: get(session, 'currentUser'),
          channel,
          time: new Date(),
          content: msg
      })
      message.save();
      channel.save();

      set(this,'msg', '');
    }
  },
});

