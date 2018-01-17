import Component from '@ember/component';

const Input =  Component.extend({
  tagName: 'div',
  inputType: 'text',
});

Input.reopenClass({
  positionalParams: ['value']
})

export default Input;