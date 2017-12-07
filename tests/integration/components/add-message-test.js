import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | add message', function() {
  setupComponentTest('add-message', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#add-message}}
    //     template content
    //   {{/add-message}}
    // `);

    this.render(hbs`{{add-message}}`);
    expect(this.$()).to.have.length(1);
  });
});
