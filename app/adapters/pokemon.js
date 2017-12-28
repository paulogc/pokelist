import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://pokeapi.co',
  namespace: '/api/v2',
  pathForType: type => type,

  ajax: function(url, type, hash) {
    if (hash && type === 'PUT') {
      console.log('put');
      hash.headers = {
        'pokemon-edit': true,
      }
    }

    return this._super(url, type, hash);
  }
});
