import { Proveedor } from './proveedor.js';
import { Articulo } from './articulo.js';
import { calcularImpuesto } from './utils.js';

document.getElementById('proveedorForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreArticulo = document.getElementById('nombreArticulo').value;
    const precio = parseFloat(document.getElementById('precio').value);

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    const nuevoArticulo = new Articulo(nombreArticulo, precio);
    const nuevoProveedor = new Proveedor(nombre, nuevoArticulo, email, telefono);
    console.log(nuevoProveedor);
    console.log(nuevoArticulo);
    const impuesto = calcularImpuesto(nuevoArticulo);
    console.log(`El impuesto a pagar es: ${impuesto}`);
    console.log(nuevoProveedor.getInfoProveedor())
});


