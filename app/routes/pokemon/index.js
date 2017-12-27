import Route from '@ember/routing/route';


export default Route.extend({
  isLoading: true,
  model() {
    return this.store.query(
      'pokemon',
      {
        limit: 100,
        offset: 20
      }
    ).then(pokemon => {
      this.set('isLoading', false);
      return pokemon;
    });
  },

  actions: {
    editPokemon() {

    }
  }
});