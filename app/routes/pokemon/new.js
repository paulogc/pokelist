import Route from '@ember/routing/route';

export default Route.extend({
  pokemonName: '',
  abilityName: '',

  actions: {
    savePokemon() {
      const name = this.get('pokemonName');
      const ability = this.get('abilityName');
      console.log('salvou!!!!');

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

      newPokemon.save().then(() => {
        this.set('successMessage', 'Pokemon has been created successfully');
        this.set('pokemonName', '');
        this.set('abilityName', '');
      });
    }
  }
});
