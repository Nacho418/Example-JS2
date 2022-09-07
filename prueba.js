let precio1 = 956
let precio2 = 841
let precio3 = 1248
let precio4 = 5128
let precio5 = 3592
let precio6 = 928

let day = new Date()
let hoy = [day.getDate(), day.getMonth(), day.getFullYear()]
let hoyStr = day.toDateString()
document.querySelector(".fecha").textContent = hoyStr
let numVenta = 0
let pagoTot = 0
let pesoTot = 0

document.querySelector("#span1").textContent = precio1
document.querySelector("#span2").textContent = precio2
document.querySelector("#span3").textContent = precio3
document.querySelector("#span4").textContent = precio4
document.querySelector("#span5").textContent = precio5
document.querySelector("#span6").textContent = precio6


function checkcant() {
    let inputs = []
    inputs = document.querySelectorAll(".inputKg")
    let errores = 0
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value < 0 || inputs[i].value == null || inputs[i].value == "") {
            errores++
        }
    }
    if (errores == 0) {
        comprar()
    }
    else {
        alert("Error en las cantidades \n Vuelva a intentar")
    }
}
function comprar() {
    let cant1 = document.querySelector("#cantKgHF")
    let cant2 = document.querySelector("#cantKgHG")
    let cant3 = document.querySelector("#cantKgHGal")
    let cant4 = document.querySelector("#cantKgAI")
    let cant5 = document.querySelector("#cantKgAl")
    let cant6 = document.querySelector("#cantKgHA")
    numVenta++
    pagoTot = (cant1.value * precio1) + (cant2.value * precio2) + (cant3.value * precio3) + (cant4.value * precio4) + (cant5.value * precio5) + (cant6.value * precio6)
    pesoTot = parseInt(cant1.value) + parseInt(cant2.value) + parseInt(cant3.value) + parseInt(cant4.value) + parseInt(cant5.value) + parseInt(cant6.value)

    window.open("C:\Users\Tecnica\Desktop\FACTURACION NACHO\PERSONAL\Web Dev\CODERHOUSE\Proyecto Bezzan\checkout.html","target_blank","width=50%, height=50%, top=25%, left=25%") // VER TEMPA WINDOW OPEN
    

    newH3.innerHTML = `
    <center>
    Ticket ${numVenta}<br><br>
    Peso Total ${pesoTot} kg<br><br>
    Total a abonar $${pagoTot}
    </center>
    `


}

function verVenta() {
    let numVen = parseInt(prompt("Ingrese número de venta"))
    if (ventas.some((venta) => venta.numVenta == numVen)) {
        let buscado = ventas.find(venta => venta.numVenta == numVen)
        console.log(buscado)
    } else {
        alert("Ticket no encontrado, intente nuevamente")
    }
}
class Venta {
    constructor(numVenta, cantProd, pago, cantCuotas, pesoTot, fecha) {
        this.numVenta = numVenta;
        this.cantProd = cantProd;
        this.pago = pago;
        this.cantCuotas = cantCuotas;
        this.pesoTot = pesoTot;
        this.fecha = fecha;
    }
}
let boton1 = document.querySelector(".comprar")
boton1.addEventListener("click", checkcant)
let boton2 = document.querySelector(".buscarVenta")
boton2.addEventListener("click", verVenta)

let newDiv = document.createElement("div")
document.body.appendChild(newDiv)
let newH3 = document.createElement("h5")
newDiv.appendChild(newH3)
newH3.textContent = ""



