import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | single message', function() {
  setupComponentTest('single-message', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#single-message}}
    //     template content
    //   {{/single-message}}
    // `);

    this.render(hbs`{{single-message}}`);
    expect(this.$()).to.have.length(1);
  });
});
