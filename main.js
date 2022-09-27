function carritoFinal() {
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

const productos = [
    {nombre: "stella", precio: 320},
    {nombre: "zillertal", precio: 300},
    {nombre: "zillertal ipa", precio: 300},
    {nombre: "zillertal apa", precio: 300},
    {nombre: "patricia", precio: 280},

];

let carrito = []

let tienda = prompt("Bienvenido a TodoAca, Usted esta ubicado en la seccion de CERVEZAS, Ingrese 'si' en caso de querer continuar, o 'no' en caso de querer cancelar la compra");

while(tienda != "si" && tienda != "no"){
    alert("Porfavor, Ingrese si o  no")
    tienda = prompt ("Desea ver nuestras cervezas, si o no?")
}

if (tienda === "si") {
    alert("a continuacion le mostraremos nuestra variedad de cervezas para que pueda elegir")

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





