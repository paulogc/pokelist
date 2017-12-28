import Controller from '@ember/controller';

export default Controller.extend({
  isLoading: true,
  filter: '',
    filteredPokemon: function(){
        const filter = this.get('filter');
        const rx = new RegExp(filter, 'gi');
        const pokemons = this.store.peekAll('pokemon');
        if (!filter) {
            return pokemons;
        }
        return this.store.peekAll('pokemon')
          .filter(function(pokemon){
            return pokemon.get('name').match(rx);
        });
    }.property('arrangedContent', 'filter'),
});
