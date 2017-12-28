import Controller from '@ember/controller';

export default Controller.extend({
  pokemonName: '',
  abilityName: '',

  actions: {
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
        }
      );
      this.set('successMessage', 'Pokemon has been created successfully');
      this.set('pokemonName', '');
      this.set('abilityName', '');
      
      newPokemon.save();
    }
  }
});
