const contribuyentes = [];
const contribuyente1 = {id:1, gestor: "MAU", nombre:'MELONI DIEGO EZEQUIEL', estado:'PREVIO', observaciones: "DENUNCIAR FECHA Y NRO MC"};
const contribuyente2 = {id:2, gestor: "MAU", nombre:'AKLE AMANCIO', estado:'PREVIO', observaciones: "ADJUNTAR ACUERDO LEGIBLE"};
const contribuyente3 = {id:3, gestor: "MAX", nombre:'IDO BENTIVOGLI', estado:'PREVIO', observaciones: "ACREDITAR MC"};
const contribuyente4 = {id:4, gestor: "MAX", nombre:'STOJADINOVIC VIVIANA', estado:'PREVIO', observaciones: "ACREDITAR TRABA MC"};
const contribuyente5 = {id:5, gestor: "NAT", nombre:'SCHMALE OSVALDO ANDRES', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"};
const contribuyente6 = {id:6, gestor: "MAX", nombre:'TORRE MAY CLARA', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"};
const contribuyente7 = {id:7, gestor: "NAT", nombre:'LAFFUE DOLORES', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"};
const contribuyente8 = {id:8, gestor: "MAX", nombre:'LUGO ELIO RICARDO', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"};
const contribuyente9 = {id:9, gestor: "MAX", nombre:'CARRIZO NESTOR JAVIER', estado:'CONFRONTE', observaciones: "OFICIO IGB RPA"};
const contribuyente10 = {id:10, gestor: "MAX", nombre:'ANDRADE SILVIA SUSANA', estado:'PREVIO', observaciones: "ACLARAR DESISTIMIENTO"};
const contribuyente11 = {id:11, gestor: "MAX", nombre:'FRISCH JUAN JOSE', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"};
const contribuyente12 = {id:12, gestor: "MAU", nombre:'GALVAN LEOPOLDO FEDERICO', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"};
const contribuyente13 = {id:13, gestor: "PER", nombre:'SOLIZ SOLIZ MARCIAL JAIME', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"};
const contribuyente14 = {id:14, gestor: "PER", nombre:'CAGLI EROL', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"};


contribuyentes.push(contribuyente1);
contribuyentes.push(contribuyente2);
contribuyentes.push(contribuyente3);
contribuyentes.push(contribuyente4);
contribuyentes.push(contribuyente5);
contribuyentes.push(contribuyente6);
contribuyentes.push(contribuyente7);
contribuyentes.push(contribuyente8);
contribuyentes.push(contribuyente9);
contribuyentes.push(contribuyente10);
contribuyentes.push(contribuyente11);
contribuyentes.push(contribuyente12);
contribuyentes.push(contribuyente13);
contribuyentes.push(contribuyente14);

console.log(contribuyentes.length);

for (const contribuyente of contribuyentes){
   document.write(contribuyente.id + " - " + contribuyente.nombre + " - " + contribuyente.gestor + " - " + contribuyente.estado + " - " + contribuyente.observaciones + "<br><br>");
}

let = estados = prompt("Ingrese el estado por el cual quiere filtrar los casos");

document.write("__________________________________________________________________________<br>Estos son los casos en estado " + estados + "<br><br><br>")
const estadoCasos = contribuyentes.filter(contribuyente => contribuyente.estado === estados);
for(contribuyente of estadoCasos){
    document.write(contribuyente.id + " - " + contribuyente.nombre + "<br>");
}