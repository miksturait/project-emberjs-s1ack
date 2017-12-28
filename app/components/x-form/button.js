import Component from '@ember/component';
import { get } from '@ember/object';

const Button = Component.extend({
  tagName: 'div',
  classNames: ['near-white', 'bg-animate', 'mw-20', 'bg-near-black', 'hover-bg-gray', 'inline-flex', 'items-center', 'ma2', 'tc', 'br2', 'pa2'],
  click() {
    get(this, 'onClick')()
  }
});

Button.reopenClass({
  positionalParams: ['name'],
})

export default Button;
