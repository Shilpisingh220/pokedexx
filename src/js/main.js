import data from "./data.json";
import  PokemonCard from "./components/PokemonCard"

// console.log(data);

const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

for (let obj of data) {
  const { name, image, description, link } = obj;
  
  pokemonRow.appendChild(PokemonCard(name, image, description, link));
}


document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    console.log(`slash was pressed`);
    inputEl.focus();
  }
});

// const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);
