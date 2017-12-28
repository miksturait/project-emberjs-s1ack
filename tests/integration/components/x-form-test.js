import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | x form', function() {
  setupComponentTest('x-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#x-form}}
    //     template content
    //   {{/x-form}}
    // `);

    this.render(hbs`{{x-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
