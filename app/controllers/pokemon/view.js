import Controller from '@ember/controller';
import moment from 'moment'

export default Controller.extend({
  lastUpdate: '',
  model(params) {
    const pokemon = this.store.findRecord('pokemon', params.pokemon_id);
    this.set('lastUpdate', moment(pokemon.lastUpdate));
    return pokemon;
  }
});
