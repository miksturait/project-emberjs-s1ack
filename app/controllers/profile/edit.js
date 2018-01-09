import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  router: service(),
  options: [  
    {id: '0', text: 'London'}, 
    {id: '+1', text: 'Warsaw'}, 
    {id: '+2', text: 'Helsinki'}
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
