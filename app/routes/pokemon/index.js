import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return this.store.query(
      'pokemon',
      {
        limit: 100,
        offset: 20
      }
    ).then(pokemon => pokemon);
  },

  actions: {
    editPokemon() {

    }
  }
});