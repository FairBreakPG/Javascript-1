let precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


function sumar(){
    cantidad++;
    const cantidadSpan = document.querySelector(".cantidad");
    cantidadSpan.innerHTML = cantidad;
    calcularTotal();
}


function restar(){
    if(cantidad > 0){
        cantidad--;
        const cantidadSpan = document.querySelector(".cantidad");
        cantidadSpan.innerHTML = cantidad;
        calcularTotal();
    }
}

function calcularTotal(){
    const total = precio * cantidad;
    console.log("total", total);
    const  totalSpan = document.querySelector(".valor-total");
    totalSpan.innerHTML = total;
}