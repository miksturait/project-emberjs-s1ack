import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | x form/input', function() {
  setupComponentTest('x-form/input', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#x-form/input}}
    //     template content
    //   {{/x-form/input}}
    // `);

    this.render(hbs`{{x-form/input}}`);
    expect(this.$()).to.have.length(1);
  });
});
