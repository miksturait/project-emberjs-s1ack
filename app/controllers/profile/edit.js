import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  router: service(),
  actions: {
    save() {
      this.model.save();
      get(this, 'router').transitionTo('profile');
    }
  }
});
