import Route from '@ember/routing/route';

export default Route.extend({
  isLoading: true,
  isDisabled: false,

  model() {
    this.get('store').findRecord('api-infos', 'next').then((apiInfo) => {
      this.set('limit', apiInfo.limit);
      this.set('offset', apiInfo.offset);
    }).catch(() => {
      this.set('limit', 20);
      this.set('offset', 20);
      const newApiInfo =
        this.store.createRecord('api-infos', { id: 'next', offset: 20, limit: 20 });
      newApiInfo.save();
    });
    return this.store.query(
      'pokemon',
      {
        limit: this.get('limit'), 
        offset: this.get('offset'),
      }
    ).then(pokemon => {
      this.set('isLoading', false);
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