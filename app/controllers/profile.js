import Controller from '@ember/controller';
import { computed, get } from '@ember/object';

export default Controller.extend({
  avatarUrl: computed('model.photoUrl', function() {
    if (get(this, 'model.photoUrl')) {
      return get(this, 'model.photoUrl');
    } else {
      return 'https://placehold.it/50x50.jpg/ffffff/000?text=Me'
    }
  })
});
