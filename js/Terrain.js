import { BienImmobilier } from "./BienImmobilier.js";

export class Terrain extends BienImmobilier {
    #etudeSol;

    set etudeSol (etudeSol) {
        this.#etudeSol = etudeSol
    }
    get etudeSol () {
        return this.#etudeSol
    }

    constructor (titre, description, prix, adresse, surface, etudeSol) {
        super(titre, description, prix, adresse, surface)
        this.#etudeSol=etudeSol
    }
    
    injectHtml (targetID) {
        const createCard = document.createElement('div')
        createCard.classList.add('card')
        createCard.innerHTML='<img src="img/terrain.jpg" alt="Terrain" class="annonce_img">'

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
        createCorpus.innerHTML='<p class="info_text">' + this.adresse + '</p> <p class="info_text">'+ this.etudeSol + '</p><p class="info_text">' + this.description + "</p>"

        createCard.append(createBuildingInfo)
        createBuildingInfo.append(createFlex)
        createFlex.append(createTitleH3)
        createFlex.append(createPrice)
        createBuildingInfo.append(createCorpus)
    }
}