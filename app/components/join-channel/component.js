import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
session: service(),
store: service(),

  actions: {
    joinChannel() {
      let currentUser = this.get('session.currentUser');
      let channel = this.get('channel');
      let organization = this.get('store').peekRecord('organization', this.get('channel.organization.id'));
      channel.get('users').pushObject(currentUser);
      channel.save().then((channel) => {
        currentUser.get('channels').pushObject(channel);
        organization.get('channels').pushObject(channel);
        currentUser.save().then(() => {
          channel.save();
          currentUser.save();
          organization.save();
        })
      });
    }
  }
});
