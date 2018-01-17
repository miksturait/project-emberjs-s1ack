import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  name: DS.attr('string'),
  photoUrl: DS.attr('string'),
  nick: DS.attr('string'),
  whatIDo: DS.attr('string'),
  status: DS.attr('string'),
  timezone: DS.attr('string'),
  secondaryEmail: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  birthday: DS.attr('string')
});
