export class Articulo {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
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

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(value) {
        this._cantidad = value;
    }
}
