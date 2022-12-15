const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  let pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;
  pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  /* const url_characteristic = `https://pokeapi.co/api/v2/characteristic?offset=${offset}&limit=${limit}`
  const url_ability = `https://pokeapi.co/api/v2/ability?offset=${offset}&limit${limit}`   */

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};

pokeApi.pokemonDetails = async (id) => {
  console.log(" id  ", id);
  const result = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`)
    .then((response) => response.json())
    .then((descriptions) => descriptions);
  const descriptions = result.descriptions;
  let descriptionPokemon = "";

  descriptions.forEach((description) => {
    //console.log(description.description);
    if (description.language.name === "en") {
      descriptionPokemon = description.description;
      return;
    }
    console.log(descriptionPokemon);
    return descriptionPokemon;
  });
};

/* Promise.all([
  fetch("https://pokeapi.co/api/v2/pokemon/1"),

  fetch("https://pokeapi.co/api/v2/pokemon/2"),

  fetch("https://pokeapi.co/api/v2/pokemon/3"),

  fetch("https://pokeapi.co/api/v2/pokemon/4"),
]).then((results) => {
  console.log(results);
}); */
