import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  channels: DS.hasMany('channel'),
  users: DS.hasMany('user'),
});
