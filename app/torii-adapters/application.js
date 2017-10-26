import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject as service } from '@ember/service';

export default ToriiFirebaseAdapter.extend({
  store: service(),
  open(authentication) {
    return Ember.RSVP.hash({
      uid: authentication.uid,
      currentUser: this._findOrCreateUser(authentication)
    })
  },
  _findOrCreateUser({uid, photoURL: photoUrl, displayName: name}) {
    let store = this.get('store');

    return store.findRecord('user', uid)
      .then( function (user) {
        user.setProperties(photoUrl, name)
        return user.save()
      })
      .catch(function() {
        let user = store.createRecord('user', {photoUrl, name, id: uid});
        return user.save();
      })
  }
});
