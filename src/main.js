import data from "./data.json";

const inputEl = document.querySelector("#floatingInputGroup1");
console.log(inputEl);

document.addEventListener("keyup",(e) => {
    if (e.key === "/"){
    inputEl.focus();
    }
});

// for (let object of data) {
//     console.log(object.name);
// }