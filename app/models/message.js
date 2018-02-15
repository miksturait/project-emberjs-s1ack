import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('string'),
  content: DS.attr('string'),
  pinned: DS.attr('boolean'),
  author: DS.belongsTo('user'),
  channel: DS.belongsTo('channel')
});
