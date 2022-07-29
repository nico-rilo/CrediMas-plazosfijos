let precio = 0;

const intereses = [1.1, 1.2, 1.3, 1.4, 1.5]

const PlazosFijos = [];

class plazoFijoUsuario {
    constructor(monto, interes){
        this.monto = monto,
        this.interes = interes,
        this.deposito = this.monto * this.interes
    }
}

function pedirMonto() {
    return parseFloat (prompt("Calcula tu Plazo Fijo: Ingresá el monto, hasta $1000 - 10% anual, hasta $2000 - 20% anual, hasta $3000 - 30% anual, hasta $4000 - 40% anual, y superior a $5000 - 50% anual. RECORDÁ QUE EL DEPÓSITO NO PUEDE SUPERAR LOS $10000"));
}
    
function CalcularIntereses() {
    precio = pedirMonto()

    while (!precio) {
        alert ("No es un dato válido. Intentá de nuevo: ");
        precio = pedirMonto();
    }

    while (precio > 10000) {
        alert ("No podés depositar mas de 10000. Intentá de nuevo: ");
        precio = pedirMonto();
    }
    
    if (precio <= 1000) {
        alert ("Depositando ese monto tenés el 10% de interés anual");
        alert ("Tu depósito se convertirá en" + "$" + precio * intereses [0]);        
        PlazosFijos.push(new plazoFijoUsuario(precio, intereses[0]));
    } else if (precio <= 2000) {
        alert ("Depositando ese monto tenés el 20% de interés anual");
        alert ("Tu depósito se convertirá en" + "$" + precio * intereses [1])
        PlazosFijos.push(new plazoFijoUsuario(precio, intereses[1]));
    } else if (precio <= 3000) {
        alert ("Depositando ese monto tenés el 30% de interés anual");
        alert ("Tu depósito se convertirá en" + "$" + precio * intereses [2])
        PlazosFijos.push(new plazoFijoUsuario(precio, intereses[2]));
    } else if (precio <= 4000) {
        alert ("Depositando ese monto tenés el 40% de interés anual");
        alert ("Tu depósito se convertirá en" + "$" + precio * intereses [3])
        PlazosFijos.push(new plazoFijoUsuario(precio, intereses[3]));
    } else { alert ("Depositando ese monto tenés el 50% de interés anual"); 
        alert ("Tu depósito se convertirá en" + "$" + precio * intereses [4]);
    PlazosFijos.push(new plazoFijoUsuario(precio, intereses[4]));
    }

}

function repetirCiclo() {
    let respuesta;
    do {
        respuesta = prompt("Querés agregar otro plazo fijo? Respondé sólo si o no") .toLowerCase();
        if(respuesta === "si") {
            CalcularIntereses();
            repetirCiclo();
        } else if (respuesta === "no") {
            alert ("Perfecto, no agregaremos mas plazos fijos");
        } else {
            alert ("No pusiste un si o un no. Intentá nuevamente: ");
        }
    } while (respuesta !== "si" && respuesta !== "no");
}

function mostrarPlazos() {
    alert ("Estos son tus plazos fijos: ");
    mensaje = "";
    for(const plazoFijo of PlazosFijos) {
        mensaje += "Tenés un plazo fijo de " + plazoFijo.monto + ", que se convertirán en " + plazoFijo.deposito + ".\n";
    }
    alert(mensaje);
}

CalcularIntereses();
repetirCiclo();
mostrarPlazos();

const totalSuma = PlazosFijos.reduce((acc, el) => + acc + el.deposito, 0)
alert ("Tu Saldo final con depósitos e intereses será de: $ " + totalSuma) 




const titulo = (document.querySelector("h1").textContent = "CrediMas");

const subTitulo = (document.querySelector(".text-white-50").textContent = "Es, mejor.");

const titulo2 = (document.querySelector("h2").textContent = "La vida sin problemas es matar el tiempo a lo bobo");

const descripcion = (document.querySelector(".lead").textContent = "Happiness is a warm gun");

const enlace = document.querySelector(".navbar-brand");
enlace.remove()

let agregado = document.createElement("p");
agregado.innerHTML = "<h5>Parrafo agregados</h5>";

const encabezado = document.querySelector(".encabezado");
console.log (encabezado.children)

encabezado.insertBefore(agregado, encabezado[1]); 

/* agrego array */
let listaVacia = document.querySelector("#listaVacia");

let otrosServicios = ["Dólares", "Bonos", "Caja de seguridad"];

for (let servicio of otrosServicios) {
    let listado = document.createElement("li");
    listado.innerHTML = servicio;
    listaVacia.appendChild(listado);
    }
