import Component from '@ember/component';

const Input =  Component.extend({
  tagName: 'div',
});

Input.reopenClass({
  positionalParams: ['value']
})

export default Input;