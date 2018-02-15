import DS from 'ember-data';
import { filterBy } from '@ember/object/computed';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  messages: DS.hasMany('message'),
  organization: DS.belongsTo('organization'),
  pinnedMessages: filterBy('messages', 'pinned', true),
});
