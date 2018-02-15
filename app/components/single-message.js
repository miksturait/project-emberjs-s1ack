import Component from '@ember/component';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'li',
  classNames: ['flex'],
  classNameBindings: ['isPinned:pinned'],
  isPinned: alias('msg.pinned'),
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
