const productos = [
  
{ nombre: "Actron 600", precio: 8200 },
            { nombre: "Actron 400", precio: 3400 },
            { nombre: "Alikal", precio: 900 },
            { nombre: "Alikal Naranja", precio: 900 },
            { nombre: "Amoxidal", precio: 3000 },
            { nombre: "Amoxicilina", precio: 1500 },
            { nombre: "Almaximo", precio: 2500 },
            { nombre: "Aspirineta", precio: 1000 },
            { nombre: "Azitromicina", precio: 2100 },
            { nombre: "Bayaspirina", precio: 2200 },
            { nombre: "Buscapina", precio: 8200 }, 
            { nombre: "Buscapina Comp", precio: 6600  },
            { nombre: "Buscapina Fem", precio: 3600  },
            { nombre: "Biletan Forte", precio: 6500 },
            { nombre: "Cafiaspirina", precio: 2500 },
            { nombre: "Cafiaspirina Plus", precio: 3300 },
            { nombre: "CaramelosC/Antibioticos", precio: 3300 },
            { nombre: "Dexalergin", precio: 12800 },
            { nombre: "Diclofenac", precio: 1200 },
            { nombre: "DiclocFlex", precio: 1500 },
            { nombre: "DiclocB12", precio: 3400 },
            { nombre: "Dorixina", precio: 2500 },
            { nombre: "Ibu 600", precio: 1200 },
            { nombre: "Ibuevanol Rap.Acc", precio: 2700 },
            { nombre: "Ibuevanol Plus", precio: 3000 },
            { nombre: "Ibuevanol Forte", precio: 3400 },
            { nombre: "Ibuevanol Max", precio: 4200 },
            { nombre: "Keterolac Sub.", precio: 1200 },
            { nombre: "Keterolac", precio: 1200 },
            { nombre: "Laxante", precio: 5000 },
            { nombre: "Loratadina", precio: 1000 },
            { nombre: "Loperamida", precio: 1000 },
            { nombre: "Mejoralito", precio: 3200 },
            { nombre: "Migral", precio: 5100 },
            { nombre: "Mylanta", precio: 3800 },
            { nombre: "Novalagina", precio: 6000 },
            { nombre: "Omeprazol", precio: 1300 },
            { nombre: "Pastilla De Carbon", precio: 1500 },
            { nombre: "Ponstil", precio: 2100 },
            { nombre: "Quraplus", precio: 4500 },
            { nombre: "Refrianex", precio: 4600 },
            { nombre: "Next CB", precio: 3500 },
            { nombre: "Next Comprimidos", precio: 3800 },
            { nombre: "Sertal Perla", precio: 5400 },
            { nombre: "Sertal Compuesto", precio: 7900 },
            { nombre: "Sertal CompuestoOFERTA", precio: 6700 },
            { nombre: "Fabogesic 600", precio: 3100 },
            { nombre: "Geniol", precio: 1500 },
            { nombre: "Tafirol 1g", precio: 2100 },
            { nombre: "Tafirol 500mg", precio: 2100 },
            { nombre: "Tafirol Plus", precio: 3000 },
            { nombre: "Tafirol Resaca", precio: 4400 },
            { nombre: "Tafirol Duo", precio: 4200 },
            { nombre: "Tafirolito", precio: 3600 },
            { nombre: "TeRolfita", precio: 800 },
            { nombre: "Te Vick", precio: 2800 },
            { nombre: "Te BayaC", precio: 1500 },
            { nombre: "Te VENT3", precio: 1300 },
            { nombre: "Uvasal", precio: 500 },
            { nombre: "Ovulol", precio: 2000 },
            { nombre: "Ibu Pediatrico", precio: 2600 },
            { nombre: "Curitas", precio: 1500 },
            { nombre: "Curitas Kids", precio: 1200 },
            { nombre: "Enc.CANDELAx25", precio: 9000 },
            { nombre: "Enc.Sharkx25", precio: 7500 },
            { nombre: "Pres.PRIME", precio: 4100 },
            { nombre: "Pres.MAXX", precio: 1700 },
            { nombre: "Sedal Sobres", precio: 7300 },
            { nombre: "Pantene Sobres", precio: 5600 },
            { nombre: "Gillette x20", precio: 21000 },
            { nombre: "Gillette x28", precio: 29000 },          
            { nombre: "Kolynos", precio: 2000 },
            { nombre: "Odol", precio: 2400 },
            { nombre: "Colgate", precio: 2500 },
            { nombre: "Cartabellax3", precio: 1600 },
            { nombre: "Felpita x4", precio: 1800 },            
            { nombre: "Bombuchas", precio: 1800 },
            { nombre: "Pañuelo Elite x6", precio: 1900 },
            { nombre: "Honey Mujer 5g", precio: 2000 },
            { nombre: "Honey Hombre 15g", precio: 3500 },
            { nombre: "Candy Men/Women", precio: 3500 },
            { nombre: "Elfbar", precio: 21000 },
            { nombre: "Buscapina8", precio: 8000 },
        
];

// Función para cargar los productos en el contenedor
const cargarProductos = () => {
  const contenedorProductos = document.getElementById("productos-container");

  // Iterar sobre el array de productos y crear la estructura HTML
  productos.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Variables para que cargar precio de lista y que calcule la ganancia
    // const Ganancia = (producto.precio * 30) / 100;
    // const precioFinal = producto.precio + Ganancia;

    const precioSugerido = producto.precio + producto.precio * (40 / 100);
    const precioRedondeado = Math.round(precioSugerido / 10) * 10;

    divProducto.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>$${producto.precio}</p>
      <label for="${producto.nombre}">Cantidad:</label>
      <select name="${producto.nombre}" id="${producto.nombre}">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>20</option>
        <option>24</option>
        <option>25</option>
        <option>30</option>
        <option>60</option>
        <!-- Agrega más opciones según sea necesario -->
      </select>
     <p class="sugerido">(Sug.$${precioRedondeado}) </p>
    `;

    // Agregar el producto al contenedor
    contenedorProductos.appendChild(divProducto);
  });
};

// formulita +40% sugerido   producto.precio + producto.precio * (40 / 100)

cargarProductos();

document.getElementById("boton-comprar").addEventListener("click", function () {
  // Obtener el nombre del cliente
  const nombreCliente = document.getElementById("nombre").value;

  // Obtener la cantidad de cada producto seleccionado
  const cantidades = {};
  productos.forEach((producto) => {
    const cantidad = document.getElementById(producto.nombre).value;
    if (cantidad > 0) {
      cantidades[producto.nombre] = cantidad;
    }
  });

  // Convertir la información a cadena de consulta
  const queryString = `?nombre=${encodeURIComponent(
    nombreCliente
  )}&${Object.entries(cantidades)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&")}`;

  // Redirigir a factura.html con la información
  window.location.href = `factura.html${queryString}`;
});
