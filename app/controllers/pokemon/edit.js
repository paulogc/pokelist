import Controller from '@ember/controller';

export default Controller.extend({
  isSaved: false,
  willSave: false,

  model(params) {
    return this.get('store').findRecord('pokemon', params.pokemon_id);
  },

  actions: {
    willSave() {
      this.set('willSave', true);
    },

    cancel() {
      this.set('willSave', false);
    },

    savePokemon() {
      this.set('isSaved', true);
      this.set('willSave', false);
    },

    didTransition() {
      this.set('isSaved', true);
    }
  }
});
