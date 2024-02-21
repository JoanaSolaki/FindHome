export class BienImmobilier {
    #id;
    #titre;
    #description;
    #prix;
    #adresse;
    #loyer;
    #achat;
    #surface;

    set id (id) {
        this.#id = id
    }
    get id () {
        return this.#id
    }
    set titre (titre) {
        this.#titre = titre
    }
    get titre () {
        return this.#titre
    }
    set description (description) {
        this.#description = description
    }
    get description () {
        return this.#description
    }
    set prix (prix) {
        this.#prix = prix
    }
    get prix () {
        return this.#prix
    }
    set adresse (adresse) {
        this.#adresse = adresse
    }
    get adresse () {
        return this.#adresse
    }
    set loyer (loyer) {
        this.#loyer = loyer
    }
    get loyer () {
        return this.#loyer
    }
    set achat (achat) {
        this.#achat = achat
    }
    get achat () {
        return this.#achat
    }
    set surface (surface) {
        this.#surface = surface
    }
    get surface () {
        return this.#surface
    }

    constructor (titre, description, prix, adresse, loyer, achat, surface) {
        this.#id=Math.floor(Math.random() * 9999) + 1
        this.#titre=titre
        this.#description=description
        this.#prix=prix
        this.#adresse=adresse
        this.#loyer=loyer
        this.#achat=achat
        this.#surface=surface
    }
}