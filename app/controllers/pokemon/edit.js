import Controller from '@ember/controller';
import moment from 'moment';

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

      this.store.findRecord('pokemon', this.get('model.id')).then((pokemon) => {
        pokemon.set('name', this.get('model.name'));
        pokemon.set('abilities', this.get('model.abilities'));
        pokemon.set('updateDate', moment().format('YYYY-MM-DD HH:mm'));
        pokemon.save();
      })
    },

    didTransition() {
      this.set('isSaved', true);
    }
  }
});
