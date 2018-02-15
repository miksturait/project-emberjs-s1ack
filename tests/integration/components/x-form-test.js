import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | x form', function() {
  setupComponentTest('x-form', {
    integration: true
  });

  it('Check if is blank when rendered', async function() {
    await this.render(hbs`
    {{#x-form as |f|}}
       {{f.input user.whatIDo label="What I Do"}}
    {{/x-form}}`);
    expect(find('input').value).to.equal('');
  });
});
