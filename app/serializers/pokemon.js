import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const results = payload.results;
    const pokemon = [];
    results.forEach((pokemonItem) => {
      pokemon.push(
        {
          id: pokemonItem.name,
          name: pokemonItem.name,
          url: pokemonItem.url,
        })
    });
    payload = { pokemon };
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
