import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 's1ack/tests/helpers/start-app';
import destroyApp from 's1ack/tests/helpers/destroy-app';
import { click, find, triggerEvent } from 'ember-native-dom-helpers';

describe('Acceptance | pinned messages', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can display pinned messages', async function() {
    this.timeout(0);
    await visit('/organizations');
    await expect(currentURL()).to.equal('/organizations');
    await click('div.teams.box > a');
    await document.querySelector('div.channels.box > ul div:nth-child(3) > a').click()
    await expect(find('div.channels.box')).to.be.ok;
    await triggerEvent('div.header.box div', 'click');
  });
});
