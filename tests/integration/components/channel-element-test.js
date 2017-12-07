import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | channel element', function() {
  setupComponentTest('channel-element', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#channel-element}}
    //     template content
    //   {{/channel-element}}
    // `);

    this.render(hbs`{{channel-element}}`);
    expect(this.$()).to.have.length(1);
  });
});
