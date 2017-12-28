import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.results) {
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
    } else {
      const pokemonName = payload.forms[0].name;
      const url = payload.forms[0].url;
      const abilities = payload.abilities.map((ability) => {
        return { name: ability.ability.name }
      });
      const image = payload.sprites.front_default
      // store.findRecord('pokemon', pokemonName).then((pokemon) => {
      //   pokemon.set('abilities', abilities);
      //   pokemon.set('image', image);
      // });
      const pokemon = [
        {
          id: pokemonName,
          name: pokemonName,
          url,
          image,
          abilities,
        },
      ];
      payload = { pokemon };

      return this._super(store, primaryModelClass, payload, id, requestType)
    }
  }
});
