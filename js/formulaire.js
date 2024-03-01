import { Appartement } from "./Appartement.js";
import { Maison } from "./Maison.js";
import { Terrain } from "./Terrain.js";

const titreAnnonce = document.getElementById('titleAnnounce')
const surface = document.getElementById('area')
const prix = document.getElementById('price')
const adresse = document.getElementById('adress')
const description = document.getElementById('description')
const etages = document.getElementById('floors')
const pieces = document.getElementById('rooms')
const particularités = document.querySelectorAll('input[name="particularity"]')

document.getElementById("formulaire").addEventListener('submit', (event) => {

    const titreAnnonceValue = titreAnnonce.value
    const typeValue = document.querySelector('input[name=type]:checked').value
    const surfaceValue = surface.value
    const prixValue = prix.value
    const adresseValue = adresse.value
    const descriptionValue = description.value
    const etagesValue = etages.value
    const piecesValue = pieces.value
    let selectedParticularites = [];
    particularités.forEach(particularity => {
        if (particularity.checked) {
            selectedParticularites.push(particularity.value)
        }
    });
    const solValue = document.querySelector('input[name=ground]:checked').value

    let cards = JSON.parse(localStorage.getItem("Annonce")) || []

    const newCard = {
        titre: titreAnnonceValue,
        type: typeValue,
        surface: surfaceValue,
        prix: prixValue,
        adresse: adresseValue,
        description: descriptionValue,
        etages: etagesValue,
        pieces: piecesValue,
        sol: solValue,
        particularites: selectedParticularites
    };

    cards.push(newCard)

    localStorage.setItem("Annonce", JSON.stringify(cards))
});