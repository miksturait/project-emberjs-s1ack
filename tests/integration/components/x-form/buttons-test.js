import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | x form/buttons', function() {
  setupComponentTest('x-form/buttons', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#x-form/buttons}}
    //     template content
    //   {{/x-form/buttons}}
    // `);

    this.render(hbs`{{x-form/buttons}}`);
    expect(this.$()).to.have.length(1);
  });
});
