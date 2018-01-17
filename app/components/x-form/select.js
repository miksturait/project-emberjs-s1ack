import Input from 's1ack/components/x-form/input';
import { set } from '@ember/object';

export default Input.extend({
  didInsertElement(){
    this._super(...arguments);
  },
  actions: {
    setSelection(selected){
      set(this, 'value', selected);
    }
  }  
});