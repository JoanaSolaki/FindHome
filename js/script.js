import { Appartement } from "../js/Appartement.js";
import { Maison } from "../js/Maison.js";
import { Terrain } from "../js/Terrain.js";

const titre_annonce = document.getElementById('titleAnnounce').value
const type = document.querySelectorAll('input[name="type"]')

document.getElementById("button").addEventListener("click", () => {
    let selectedType;
    for (const radioButton of type) {
        if (radioButton.checked) {
            selectedType = radioButton.value;
            break;
        }
    }
    console.log(selectedType);
});