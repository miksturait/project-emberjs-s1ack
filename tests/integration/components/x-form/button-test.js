import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | x form/button', function() {
  setupComponentTest('x-form/button', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#x-form/button}}
    //     template content
    //   {{/x-form/button}}
    // `);

    this.render(hbs`{{x-form/button}}`);
    expect(this.$()).to.have.length(1);
  });
});
