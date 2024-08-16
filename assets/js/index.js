import { Proveedor } from './proveedor.js';
import { Articulo } from './articulo.js';
import { calcularImpuesto } from './utils.js';

document.getElementById('proveedorForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreArticulo = document.getElementById('nombreArticulo').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    const nuevoArticulo = new Articulo(nombreArticulo, precio, cantidad);
    const nuevoProveedor = new Proveedor(nombre, nuevoArticulo, email, telefono);
    const impuesto = calcularImpuesto(nuevoArticulo);

    console.log(nuevoProveedor);
    console.log(nuevoArticulo);
    console.log(`El impuesto a pagar es: ${impuesto}`);
    console.log(nuevoProveedor.getInfoProveedor())

    function generarIdAleatorio(min = 1, max = 1000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const idAleatorio = generarIdAleatorio();

    const tabla = document.getElementById('importacionesTable').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();
    nuevaFila.insertCell(0).textContent = idAleatorio;
    nuevaFila.insertCell(1).textContent = nuevoArticulo.nombre;
    nuevaFila.insertCell(2).textContent = nuevoArticulo.cantidad;
    nuevaFila.insertCell(3).textContent = nuevoArticulo.precio;
    nuevaFila.insertCell(4).textContent = nuevoArticulo.precio * nuevoArticulo.cantidad;

    document.getElementById('totalImpuesto').textContent = `Total impuesto: ${impuesto}`;
    document.getElementById('totalModal').style.display = 'block';
});

document.getElementById('btnCerrarModal').addEventListener('click', (event) => {
    document.getElementById('totalModal').style.display = 'none';
});

