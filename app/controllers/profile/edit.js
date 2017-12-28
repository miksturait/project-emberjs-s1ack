import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, setProperties } from '@ember/object';

export default Controller.extend({
  router: service(),
  actions: {
    save() {
      this.model.save();
      this.transitionToRoute('profile');
    },
    cancel() {
      this.transitionToRoute('profile');
    }
  }
});
