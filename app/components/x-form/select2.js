import Select from 's1ack/components/x-form/select';
import layout from 's1ack/templates/components/x-form/select'; 
import $ from 'jquery';
import { get, set } from '@ember/object';

export default Select.extend({
  layout,
  didInsertElement(){
    this._super(...arguments);
    const options = get(this, 'options'),
          value = get(this, 'value');
          
    const data = options.map(option => {
     return value == option.id ? Object.assign({selected: true}, option) : option; // user's value is selected by default
    });

    $('select').select2({ 
      width: 460,
      data: data,
    });

    $('select').on('select2:select', (e) => {
      const value = e.target.value;

      set(this, 'value', value);
    });
  },
  willDestroyElement(){
    this._super(...arguments);
    $('select').select2('destroy');
  }
})
