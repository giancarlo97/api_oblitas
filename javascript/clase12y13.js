const usuario1 = {
    nombre : "Pepe",
    edad : 30,
    telefono: {
        cel: 1123456789,
        casa: null,
        trabajo: 1198765432
    }
}

const { nombre, telefono: {trabajo} } = usuario1

console.log(nombre)
console.log(trabajo)

const usuario2 = null

const autorizacion = (usuario1.edad >= 18) ? true : false

const altaIngreso = usuario1.edad >=18 && new Date()

autorizacion ? alert("Es mayor de edad") : alert("No puede comprar, es menor de edad")

console.log(altaIngreso)

console.log( usuario1 || "No existe")

console.log( usuario2 || "No existe")

const cliente1 = {
    nombre: "Carla",
    edad: 20,
    moneda: "Dolar"
}

const cliente2 = {
    ...cliente1
}

console.log(cliente2)

const cliente3 = {
    ...cliente1,
    moneda: "Euro",
    email: "pepe@yahoo.com"
}

console.log(cliente3)

function conversiones(...transferencias) {
    return transferencias.reduce((acc,n) => acc + n, 0)
}

console.log(conversiones(10000,15000))
console.log(conversiones(1000,5000,90000,54000))
console.log(conversiones(500,45000,100000))



Swal.fire({
    title: "Bienvenido!",
    icon: "question",
    confirmButtonText: "Seleccionar su pais",
    padding: "1rem",
    backdrop: true,
    position: "center",
    toast: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,

    input: "select",
    inputPlaceholder: "Pais",
    inputValue: "",
    inputOptions: {
        mexico: "Mexico",
        españa: "España",
        argentina: "Argentina",
        venezuela: "Venezuela",
        brasil: "Brasil",
        chile: "Chile"
    }
   

});

