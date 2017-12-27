import Controller from '@ember/controller';

export default Controller.extend({
  model(params) {
    return this.get('store').findRecord('pokemon', params.pokemon_id);
  },
});
