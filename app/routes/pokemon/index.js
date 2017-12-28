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
    loadMore() {
      this.store.findRecord('api-infos', 'next').then((apiInfo) => {
        apiInfo.set('limit', this.get('limit') + 20);
        apiInfo.set('offset', this.get('offset') + 20);
        apiInfo.save();
        this.transitionTo();
      })
    }
  }
});