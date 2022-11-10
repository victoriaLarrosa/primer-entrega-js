const shopContent = document.getElementById("shopContent")
const verCarito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")



let carrito = JSON.parse(localStorage.getItem("compras")) || [];

function Birra(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
}

const productos = [
    {
    id:1,
    nombre: "stella",
    precio: 320,
    img: "./assets/stella.jpg"},

    {
    id:2,
    nombre: "zillertal",
    precio: 300,
    img: "./assets/zillertal.jpg"},

    {
    id:3,
    nombre: "zillertal ipa",
    precio: 320,
    img: "./assets/zillertal-ipa.png"},

    {
    id:4,
    nombre: "zillertal apa",
    precio: 320,
    img: "./assets/zillertal-apa.jpg"},

    {
    id:5,
    nombre: "patricia",
    precio: 280,
    img: "./assets/lager.png",
    },

];

let productosJzon = []
const pedirArray = async () => {
    const resp = await fetch("/api.json");
    const productos = await resp.json();
    for (let cerveza of productos) {
      let cervezaNueva = new Birra(
        cerveza.id,
        cerveza.nombre,
        cerveza.precio,
        cerveza.img
      );
      productosJzon.push(cervezaNueva);
    }
  };
  pedirArray();

  console.log(productosJzon)
  console.log("array json")


productos.forEach ((product) => {
    let content = document.createElement ("div");
    content.className = "card",
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">$${product.precio}</p>`;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.className = "comprar";
    comprar.innerText = "Añadir al carrito";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push ({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log (carrito);
        productosGuardados();
    }); 
});

const productosCarrito = () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h1");
    modalButton.innerHTML = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
    `;
    modalContainer.append(carritoContent);

    let eliminar = document.createElement("span")
    eliminar.innerText = "X";
    eliminar.className = "eliminar-producto"
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProd)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const compraTotal = document.createElement("div")
    compraTotal.className = "compra-total"
    compraTotal.innerHTML = `El total a pagar es de: $${total}`;
    modalContainer.append(compraTotal);
};

verCarrito.addEventListener("click", productosCarrito);

const eliminarProd = () => {
    const foundId = carrito.find((element) => element.id);
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    productosCarrito();
    productosGuardados(); 
}

//Probando localStorage y JSON

const productosGuardados = () => {
localStorage.setItem("compras", JSON.stringify(carrito));
};





