import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.belongsTo('question', {async: true}),
  author: DS.attr(),
  date: DS.attr()
});
