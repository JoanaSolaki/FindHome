import { Appartement } from "./Appartement.js";
import { Maison } from "./Maison.js";
import { Terrain } from "./Terrain.js";

const titreAnnonce = document.getElementById('titleAnnounce')
const type = document.querySelectorAll('input[name="type"]')
const surface = document.getElementById('area')
const prix = document.getElementById('price')
const priceType = document.querySelectorAll('input[name="price"]')
const adresse = document.getElementById('adress')
const description = document.getElementById('description')
const etages = document.getElementById('floors')
const pieces = document.getElementById('rooms')
const particularités = document.querySelectorAll('input[name="particularity"]')
const sol = document.querySelectorAll('input[name="ground"]')

document.getElementById("button").addEventListener('click', () => {
    const titreAnnonceValue = titreAnnonce.value
    let selectedType;
    for (const radioButton of type) {
        if (radioButton.checked) {
            selectedType = radioButton.value;
            break;
        }
    }
    const surfaceValue = surface.value
    const prixValue = prix.value
    let selectedPrix;
    for (const radioButton of priceType) {
        if (radioButton.checked) {
            selectedPrix = radioButton.value;
            break;
        }
    }
    const adresseValue = adresse.value
    const descriptionValue = description.value
    const etagesValue = etages.value
    const piecesValue = pieces.value
    let selectedParticularites = [];
    particularités.forEach(particularity => {
        if (particularity.checked) {
            selectedParticularites.push(particularity.value)
        }
        selectedParticularites.toString()
    });
    
    let selectedGround;
    for (const radioButton of sol) {
        if (radioButton.checked) {
            selectedGround = radioButton.value;
            break;
        }
    }

    let cards = JSON.parse(localStorage.getItem("Annonce")) || []

    const newCard = {
        titre: titreAnnonceValue,
        type: selectedType,
        surface: surfaceValue,
        prix: prixValue,
        typePrix: selectedPrix,
        adresse: adresseValue,
        description: descriptionValue,
        etages: etagesValue,
        pieces: piecesValue,
        particularites: selectedParticularites,
        sol: selectedGround
    };

    cards.push(newCard)

    localStorage.setItem("Annonce", JSON.stringify(cards))
});