import data from "./data.json";

// console.log(data);

const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

for (let obj of data) {
  const { name, image, description } = obj;
  console.log(name, image, description);
  // step1 create a paragraph
  const paragraph = document.createElement("p");
  //    step2 paragraph ka content
  paragraph.textContent = name;
  //    paragraph ko pokemonrow mai add krna hai
  pokemonRow.appendChild(pokemonCard(name, image, description));
}

function pokemonCard(name, image, description) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
   <div class="card">
    <img
      src="${image}"
      class="card-img-top"
      alt="${name}"
    />
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">
      ${description}  
      </p>
    </div>
  </div>`;

  return div;
}

document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    console.log(`slash was pressed`);
    inputEl.focus();
  }
});

// const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);
