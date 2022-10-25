const shopContent = document.getElementById("shopContent")
const verCarito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

let carrito = JSON.parse(localStorage.getItem("compras")) || [];

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





