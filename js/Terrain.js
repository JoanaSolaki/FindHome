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
}