import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://pokeapi.co',
  namespace: '/api/v2',
  pathForType: type => type,

  ajax: function(url, type, hash) {
    if (hash && type === 'PUT') {
      hash.headers = {
        'put': 'put-pokemon',
      }
    }

    return this._super(url, type, hash);
  }
});
