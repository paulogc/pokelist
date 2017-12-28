import Route from '@ember/routing/route';

export default Route.extend({
  isDisabled: false,

  model() {
    return this.store.query(
      'pokemon',
      {
        limit: 40, 
        offset: 40,
      }
    ).then(pokemon => {
      this.controllerFor('pokemon.index').set('isLoading', false);
      return pokemon;
    });
  },

  actions: {
    
  }
});