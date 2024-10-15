import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// console.log(data);

const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

function renderPokemons(list) {
  pokemonRow.innerHTML = "";
  for (let obj of list) {
    const { name, image, description, link } = obj;
    const pokemon = PokemonCard(name, image, description, link);

    pokemonRow.appendChild(pokemon);
  }
}

renderPokemons(data);
// Filter functionality
// Empty the previous content
// pokemonRow.innerHTML = "";
inputEl.addEventListener("input", (e) => {
  const currentInput = e.target.value.toLowerCase().trim();
  console.log(currentInput)
  // console.log(CurrentInput, data);
  const filterPokemons = data.filter((obj) =>
    obj.name.toLowerCase().includes(currentInput)
  );

  if (filterPokemons.length === 0) {
    renderPokemons([
      {
        name: "NOT FOUND",
        image:
          "https://i.pinimg.com/originals/11/52/0c/11520cf1cc72ad1aab32fb3f26685619.jpg",
        description: "kuch aur type kariyo",
        link: "https://pokemon.card",
      },
    ]);
    return;
  }

  renderPokemons(filterPokemons);
});

// add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    console.log(`slash was pressed`);
    inputEl.focus();
  }
});

// const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);
