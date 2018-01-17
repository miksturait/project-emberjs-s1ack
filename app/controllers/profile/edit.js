import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  router: service(),
  options: [ 
    {label: 'Warsaw', value: '+1'}, 
    {label: 'London', value: '0'}
  ],
  user: alias('model'),
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
