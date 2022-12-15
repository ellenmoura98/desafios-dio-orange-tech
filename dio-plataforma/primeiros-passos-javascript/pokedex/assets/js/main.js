const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  const pokemonId = "pokemonNumberId" + pokemon.number;
  const pokemonNameId = "pokemonNameId" + pokemon.number;
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="number" id=${pokemonId}>#${pokemon.number}</span>
          <span class="name" id=${pokemonNameId}>${pokemon.name}</span>
          <div class="detail">
              <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
              </ol>
              <img src="${pokemon.photo}"
                   alt="${pokemon.name}">
          </div>
          <div class="maisDetalhesPokemons">
            <button id="informationButton" onclick="DetailPokemon(${
              pokemon.number
            })" type="button">
              Details
            </button>
         </div>
      </li>

  `;
}

async function DetailPokemon(pokemonId) {
  const pokemonNumberId = "pokemonNumberId" + pokemonId;
  const numberPokemon = document.getElementById(pokemonNumberId).innerHTML;
  const pokemonNameId = "pokemonNameId" + pokemonId;
  const namePokemon = document.getElementById(pokemonNameId).innerHTML;

  const result = await fetch(
    `https://pokeapi.co/api/v2/characteristic/${pokemonId}`
  )
    .then((response) => response.json())
    .then((descriptions) => descriptions);

  const descriptions = result.descriptions;

  let descriptionPokemon = "";

  descriptions.forEach((description) => {
    if (description.language.name === "en") {
      descriptionPokemon = description.description;
      return;
    }
  });

  alert(
    "Number: " +
      numberPokemon +
      "\n" +
      "Name: " +
      namePokemon +
      "\n" +
      "Description: " +
      descriptionPokemon
  );
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
