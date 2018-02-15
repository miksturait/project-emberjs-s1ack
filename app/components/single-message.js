import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['flex'],
  didInsertElement() {
    this._super(...arguments);
    this.element.scrollIntoView();
  },

  actions: {
    pinMessage() {
      get(this, 'msg').toggleProperty('pinned');
      get(this, 'msg').save();
    }
  }
});
