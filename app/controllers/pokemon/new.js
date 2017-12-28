import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  pokemonName: '',
  abilityName: '',
  isSaved: false,
  willSave: false,

  actions: {
    willSave() {
      this.set('willSave', true);
    },

    cancel() {
      this.set('willSave', false);
    },

    savePokemon() {
      const name = this.get('pokemonName');
      const ability = this.get('abilityName');
      const newPokemon = this.store.createRecord(
        'pokemon',
        { 
          id: name,
          name,
          abilities: [
            {
              name: ability
            },
          ],
          lastUpdate: moment().format('x'),
        }
      );
      this.set('successMessage', 'Pokemon has been created successfully');
      this.set('pokemonName', '');
      this.set('abilityName', '');
      this.set('isSaved', true);
      this.set('willSave', false);
      
      newPokemon.save();
    }
  }
});
