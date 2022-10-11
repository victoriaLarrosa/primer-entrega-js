/*function carritoFinal() {
      alert("Gracias por la compra")
      carrito.forEach((carritoFinal) => {
         console.log("Producto: " + carritoFinal.nombre + " , unidades: " + carritoFinal.unidades + ", total a pagar por producto " + carritoFinal.unidades * carritoFinal.precio)
    })

  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

  alert(`el total a paga por su compra es: ${total}`)
}

function validarSeleccion() {

    seleccion = prompt("Desea seguir comprando? ingrese si o no")

    if (seleccion === "si" || seleccion === "no") {
        
        pedidoUsuario = true
        
        return seleccion
    }

    else {
        pedidoUsuario = false
    }

    while (pedidoUsuario === false) {

        alert("Error: ingrese si o no para continuar")

        validarSeleccion()
    }
}
*/
const shopContent = document.getElementById("shopContent")
const verCarito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")


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

let carrito = []

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
    comprar.innerText = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push ({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log (carrito);
    }); 
});

verCarrito.addEventListener("click", () => {
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
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const compraTotal = document.createElement("div")
    compraTotal.className = "compra-total"
    compraTotal.innerHTML = `El total a pagar es de: $${total}`;
    modalContainer.append(compraTotal)

});



/*let tienda = prompt("Bienvenido a TodoAca, Usted esta ubicado en la seccion de CERVEZAS, Ingrese 'si' en caso de querer continuar, o 'no' en caso de querer cancelar la compra");

while(tienda != "si" && tienda != "no"){
    alert("Porfavor, Ingrese si o  no")
    tienda = prompt ("Desea ver nuestras cervezas, si o no?")
}

if (tienda === "si") {
    ("a continuacion le mostraremos nuestra variedad de cervezas para que pueda elegir")

    seleccion = tienda

    while (seleccion === "si"){
        let producto = prompt ("stella $320  -  zillertal $300  -  zillertal ipa $300  -  zillertal apa $300  -  patricia $280. Agrega un producto a tu carrito: ")
        let precio = 0
        
        producto = producto.toLowerCase()
        if(producto === "stella" || producto === "zillertal" || producto === "zillertal ipa" || producto === "zillertal apa" || producto === "patricia"){
            switch(producto) {
                case "stella":
                    precio = 320;
                    break;
                case "zillertal":
                    precio = 300;
                    break;
                case "zillertal ipa":
                    precio = 300;
                    break;
                case "zillertal apa":
                    precio = 300;
                    break;
                case "patricia":
                    precio = 280;
                    break;
                default: 
                    break;
            }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar? Ingrese solo numeros")) 

        nombre = producto
    
        carrito.push({nombre, unidades, precio})
        console.log (carrito)}
    
        else {
            alert("no tenemos ese producto")
        }
    
        validarSeleccion()
    }

    carritoFinal()

} else if (tienda === "no") {
    alert("Gracias por visitarnos, hasta pronto!")

}
*/





