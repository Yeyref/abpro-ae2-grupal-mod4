export class Articulo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }

}
