export class Proveedor {
    constructor(nombre, articulo, email, telefono) {
        this.nombre = nombre;
        this.articulo = articulo;
        this.email = email;
        this.telefono = telefono
    }

    getInfoProveedor() {
        return `Proveedor: ${this.nombre}, Teléfono: ${this.telefono}, Articulo: ${this.articulo.nombre}`;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get articulo() {
        return this._articulo;
    }

    set articulo(value) {
        this._articulo = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(value) {
        this._telefono = value;
    }


}
