import DS from 'ember-data';
import { filterBy } from '@ember/object/computed';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  messages: DS.hasMany('message'),
  organization: DS.belongsTo('organization'),
  users: DS.hasMany('user'),
  pinnedMessages: filterBy('messages', 'pinned', true),
});
