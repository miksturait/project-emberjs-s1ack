import Date from 's1ack/components/x-form/date';
import { get, set} from '@ember/object';

export default Date.extend({
  inputType: 'text',
  didInsertElement(){
    this._super(...arguments);

    set(this, 'pikaday', new Pikaday({
           field: this.element.querySelector('input'), // or we can use JQuery 
           format: 'YYYY-MM-DD',
           position: 'top right',
           showDaysInNextAndPreviousMonths: true,
      }))
  },

  willDestroyElement(){
    this._super(...arguments);
    get(this, 'pikaday').destroy();
  }

});
