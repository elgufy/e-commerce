const carrito = [];

class PrendaUsuario {
  constructor(tipoPrenda, precioPrenda) {
    this.tipoPrenda = tipoPrenda;
    this.precioPrenda = precioPrenda;
  }
}

const productos = [
  {
    tipo: 'Buzo',
    nombre: 'Buzo con capucha',
    precio: 50,
    imagen: 'imagenes/MOH_0261.jpg'
  },
  {
    tipo: 'Buzo',
    nombre: 'Buzo sin capucha',
    precio: 45,
    imagen: 'imagenes/buzosincapucha.jpg'
  },
  {
    tipo: 'Buzo',
    nombre: 'Buzo deportivo',
    precio: 55,
    imagen: 'imagenes/buzodepor.jpeg'
  },
  {
    tipo: 'Remera',
    nombre: 'Remera básica',
    precio: 20,
    imagen: 'imagenes/remerabasica.jpg'
  },
  {
    tipo: 'Remera',
    nombre: 'Remera estampada',
    precio: 25,
    imagen: 'imagenes/remeraestampada.jpg'
  },
  {
    tipo: 'Remera',
    nombre: 'Remera manga larga',
    precio: 30,
    imagen: 'imagenes/remeramangalarga.jpg'
  },
  {
    tipo: 'Pantalón',
    nombre: 'Pantalón deportivo',
    precio: 40,
    imagen: 'imagenes/pantalondeportivo.jpg'
  },
  {
    tipo: 'Pantalón',
    nombre: 'Pantalón jeans',
    precio: 50,
    imagen: 'imagenes/pantalonjean.jpg'
  },
  {
    tipo: 'Pantalón',
    nombre: 'Pantalón cargo',
    precio: 45,
    imagen: 'imagenes/pantaloncargo.jpg'
  }
];

function cargarProductos() {
  const productCardsElement = document.getElementById('product-cards');

  productos.forEach((producto) => {
    const productCard = createProductCard(producto);
    productCardsElement.appendChild(productCard);
  });
}

function createProductCard(producto) {
  const { nombre, precio, imagen } = producto;

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const imgElement = document.createElement('img');
  imgElement.src = imagen;
  imgElement.alt = nombre;
  productCard.appendChild(imgElement);

  const nameElement = document.createElement('h2');
  nameElement.textContent = nombre;
  productCard.appendChild(nameElement);

  const priceElement = document.createElement('p');
  priceElement.classList.add('price');
  priceElement.textContent = `$${precio}`;
  productCard.appendChild(priceElement);

  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'Agregar al Carrito';
  buttonElement.addEventListener('click', () => {
    agregarAlCarrito(nombre, precio);
  });
  productCard.appendChild(buttonElement);

  return productCard;
}

function agregarAlCarrito(nombre, precio) {
  const prenda = new PrendaUsuario(nombre, precio);
  carrito.push(prenda);

  mostrarMensaje(`Se agregó al carrito: ${nombre}`);
  actualizarCarrito();
}

function mostrarMensaje(mensaje) {

    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: 'top',
        position: 'right'
    }).showToast();
}

function actualizarCarrito() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${carrito[i].tipoPrenda} - $${carrito[i].precioPrenda}`;
    cartItems.appendChild(li);

    total += carrito[i].precioPrenda;
  }

  const liTotal = document.createElement('li');
  liTotal.textContent = `Total: $${total}`;
  cartItems.appendChild(liTotal);
}

cargarProductos();