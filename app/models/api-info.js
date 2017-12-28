import DS from 'ember-data';

export default DS.Model.extend({
  limit: DS.attr('string'),
  offset: DS.attr('string'),
});
