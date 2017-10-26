import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user'),
  time: DS.attr('string'),
  content: DS.attr('string')
});
