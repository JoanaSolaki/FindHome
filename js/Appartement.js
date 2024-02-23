import { BienImmobilier } from "./BienImmobilier.js";

export class Appartement extends BienImmobilier {
    #ascenseur;
    #balcon;
    #parking;
    #garage;
    #pieces;

    set ascenseur (ascenseur) {
        this.#ascenseur = ascenseur
    }
    get ascenseur () {
        return this.#ascenseur
    }
    set balcon (balcon) {
        this.#balcon = balcon
    }
    get balcon () {
        return this.#balcon
    }
    set parking (parking) {
        this.#parking = parking
    }
    get parking () {
        return this.#parking
    }
    set garage (garage) {
        this.#garage = garage
    }
    get garage () {
        return this.#garage
    }
    set pieces (pieces) {
        this.#pieces = pieces
    }
    get pieces () {
        return this.#pieces
    }

    constructor (titre, description, prix, adresse, loyer, achat, surface, ascenseur, balcon, parking, garage, pieces) {
        super(titre, description, prix, adresse, loyer, achat, surface)
        this.#ascenseur=ascenseur
        this.#balcon=balcon
        this.#parking=parking
        this.#garage=garage
        this.#pieces=pieces
    }

    createCard () {
        const createCard = document.createElement('div')
        createCard.classList.add=('card')

        const createBuildingInfo = document.createElement('div')
        createBuildingInfo.classList.add=('building_info')

        const createFlex = document.createElement('div')
        createFlex.classList.add=('flex')

        const createImg = document.createElement('img')
        createImg.innerHTML='<img src="img/appartement.jpg" alt="Appartement">'

        const createTitleH3 = document.createElement('h3')
        createTitleH3.innerHTML='<span>' + this.titre + '</span> - ' + this.surface + 'm²'

        const createPrice = document.createElement('p')
        if (loyer === true) {
            createPrice.innerText=this.prix + '€ par mois'
        } else {
            createPrice.innerText=this.prix + '€'
        }

        const createCorpus = document.createElement('p')
        createCorpus.innerHTML='<p>' + this.adresse + '</p> <p>'+ this.pieces + this.ascenseur + this.balcon + this.parking + this.garage + '</p> <p>' + this.description + '</p>'
    }

    injectHtml (target) {

    }
}