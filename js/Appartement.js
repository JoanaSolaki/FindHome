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

    injectHtml (titre, description, prix, adresse, loyer, achat, surface, ascenseur, balcon, parking, garage, pieces) {
        
    }
}