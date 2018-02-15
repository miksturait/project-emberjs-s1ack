import Component from '@ember/component';
import { alias } from '@ember/object/computed';
export default Component.extend({
  classNames: ['header', 'box'],
  showPinned: false,
  pinnedMessages: alias('channel.pinnedMessages'),
  actions: {
    togglePinned() {
      this.toggleProperty('showPinned');
    }
  }
});
