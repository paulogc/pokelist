import Route from '@ember/routing/route';


export default Route.extend({
  isLoading: true,
  isDisabled: false,

  model() {
    return this.store.query(
      'pokemon',
      {
        limit: 20, 
        offset: 20,
      }
    ).then(pokemon => {
      this.set('isLoading', false);
      this.set('limit', params.limit || 20);
      this.set('offset', params.offset || 20);
      return pokemon;
    });
  },

  actions: {
    loadMore() {
      this.transitionTo(
        'index',
        {
          queryParams: {
            limit: this.get('limit') + 20,
            offset: this.get('offset') + 20,
          }
        }
      );
    }
  }
});