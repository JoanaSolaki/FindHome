import { Appartement } from "./Appartement.js";
import { Maison } from "./Maison.js";
import { Terrain } from "./Terrain.js";

const annonces = JSON.parse(localStorage.getItem("Annonce"))

for (let i = 0; i < annonces.length; i++) {
    const annonce = annonces[i];
    if (annonce.type === "appartement") {
        const appart = new Appartement(annonce.titre, annonce.description, annonce.prix, annonce.adresse, annonce.surface, annonce.particularites, annonce.pieces)
        appart.injectHtml("cardTarget")
    }
    if (annonce.type === "maison") {
        const maison = new Maison(annonce.titre, annonce.description, annonce.prix, annonce.adresse, annonce.surface, annonce.etage, annonce.particularites, annonce.pieces)
        maison.injectHtml("cardTarget")
    }
    if (annonce.type === "terrain") {
        const terrain = new Terrain(annonce.titre, annonce.description, annonce.prix, annonce.adresse, annonce.surface, annonce.etudeSol)
        terrain.injectHtml("cardTarget")
    }
}
