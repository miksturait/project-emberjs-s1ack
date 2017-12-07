import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['flex'],
  didInsertElement() {
    this._super(...arguments);
    this.element.scrollIntoView();
  }
});
