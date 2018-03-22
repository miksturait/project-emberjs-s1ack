import { Ability } from 'ember-can';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Ability.extend({
  session: service(),

  canSee: computed('channel.users', function() {
    let users = this.get('channel.users');
    return users.includes(this.get('session.currentUser'));
  }),
});
