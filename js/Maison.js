import { BienImmobilier } from "./BienImmobilier.js";

export class Maison extends BienImmobilier {
    #etage;
    #jardin;
    #parking;
    #garage;
    #pieces;

    set etage (etage) {
        this.#etage = etage
    }
    get etage () {
        return this.#etage
    }
    set jardin (jardin) {
        this.#jardin = jardin
    }
    get jardin () {
        return this.#jardin
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

    constructor (titre, description, prix, adresse, loyer, achat, surface, etage, jardin, parking, garage, pieces) {
        super(titre, description, prix, adresse, loyer, achat, surface)
        this.#etage=etage
        this.#jardin=jardin
        this.#parking=parking
        this.#garage=garage
        this.#pieces=pieces
    }
}