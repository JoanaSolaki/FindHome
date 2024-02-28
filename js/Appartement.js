import { BienImmobilier } from "./BienImmobilier.js";

export class Appartement extends BienImmobilier {
    #particularites
    #pieces;

    set particularites (particularites) {
        this.#particularites = particularites
    }
    get particularites () {
        return this.#particularites
    }
    set pieces (pieces) {
        this.#pieces = pieces
    }
    get pieces () {
        return this.#pieces
    }

    constructor (titre, description, prix, adresse, surface, particularites = null, pieces = 0) {
        super(titre, description, prix, adresse, surface)
        this.#particularites=particularites
        this.#pieces=pieces
    }

    injectHtml (targetID) {
        const createCard = document.createElement('div')
        createCard.classList.add('card')
        createCard.innerHTML='<img src="img/appartement.jpg" alt="Appartement" class="annonce_img">'

        const target = document.getElementById(targetID)
        target.append(createCard)

        const createBuildingInfo = document.createElement('div')
        createBuildingInfo.classList.add('building_info')

        const createFlex = document.createElement('div')
        createFlex.classList.add('flex')

        const createTitleH3 = document.createElement('h3')
        createTitleH3.innerHTML='<span>' + this.titre + '</span> - ' + this.surface + 'm²'

        const createPrice = document.createElement('p')
        createPrice.classList.add('info_text')
        createPrice.innerText=this.prix + '€'

        const createCorpus = document.createElement('p')
        createCorpus.classList.add('info_text')
        createCorpus.innerHTML='<p>' + this.adresse + '</p> <p>'+ this.pieces + " Pieces - " + this.particularites.join(' - ') + '</p><p>' + this.description + "</p>"

        createCard.append(createBuildingInfo)
        createBuildingInfo.append(createFlex)
        createFlex.append(createTitleH3)
        createFlex.append(createPrice)
        createBuildingInfo.append(createCorpus)
    }
}