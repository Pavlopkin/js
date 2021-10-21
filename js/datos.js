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

let controlTres = contribuyentes.length;
console.log(controlTres);

/*/////////////////////////////////////////////EJECUTA////////////////////////////////////////*/
inicio();
/*////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////FUNCIONES///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////*/
/*--------------------------------Selector de funciones-----------------------------------*/
function inicio(){
    let control = prompt("Desea ver todos los casos? \n Ingrese Si, para confirmar \n Presione enter si quiere aplicar filtros");
    if (control.toUpperCase() == "SI"){
        imprimeOrden();
        document.write("---------------------------------------------");
        
    }
    else{
        filtro();
    }
}
/*--------------------------------------Recorre e imprime el listado--------------------------*/
function listadoTotal(){
    
    for (const contribuyente of contribuyentes){
        document.write(contribuyente.id + " - " + contribuyente.nombre + " - " + contribuyente.gestor + " - " + contribuyente.estado + " - " + contribuyente.observaciones + "<br><br>");
        
    }
}
/*-------------------------------------filtra por estados------------------------------------*/
function filtro(){
    let estados = prompt("Escriba el estado que desee individualizar: \n PEDIDO \n PREVIO \n INGRESADO \n CONFRONTE");
    
    document.write("__________________________________________________________________________<br>Se encuentran en estado " + estados + "<br><br><br>")
    const estadoCasos = contribuyentes.filter(contribuyente => contribuyente.estado === estados.toUpperCase());
    for(contribuyente of estadoCasos){
        document.write(contribuyente.id + " - " + contribuyente.nombre + "<br>");
        controlCuatro = estadoCasos.length;
    }
    let porcentaje = (controlCuatro * 100) / controlTres;
    document.write("---------<br>representa el " + porcentaje.toFixed(2) + "% de los casos");
}
/*----------------------------------ordenador--------------------------------------------------*/
function imprimeOrden(){
    let variableOrden = prompt("Indique el rubro que utilizará como referencia: \n 1 para ordenar por nombre \n 2 para ordenar por gestor \n 3 para ordenar por estado")
    switch (variableOrden){
        case "1":
            ordenNombre();
            break;
        case "2":
            ordenGestor();
            break;
        case "3":
            ordenEstado();
            break;
        default:
            alert("Opción incorrecta, se imprime de acuerdo al orden en que se ingresaron los casos");
            listadoTotal()
    }    
}
/*---------------------------------------------filtro por nombre------------------------------------*/
function ordenNombre(){
    contribuyentes.sort(function(a,b) {
        if (a.nombre > b.nombre) {
        return 1;
        } else if (a.nombre < b.nombre) {
        return -1;
        } 
        return 0;
    });
    for (const contribuyente of contribuyentes){
        document.write(contribuyente.id + " - " + contribuyente.nombre + " - " + contribuyente.gestor + " - " + contribuyente.estado + " - " + contribuyente.observaciones + "<br><br>");
        }
}
/*---------------------------------------------filtro por gestor------------------------------*/
function ordenGestor(){
    contribuyentes.sort(function(a,b) {
        if (a.gestor > b.gestor) {
        return 1;
        } else if (a.gestor < b.gestor) {
        return -1;
        } 
        return 0;
    });
    for (const contribuyente of contribuyentes){
        document.write(contribuyente.id + " - " + contribuyente.nombre + " - " + contribuyente.gestor + " - " + contribuyente.estado + " - " + contribuyente.observaciones + "<br><br>");
        }
}
/*-------------------------------------------filtro por estado----------------------------------*/
function ordenEstado(){
    contribuyentes.sort(function(a,b) {
        if (a.estado > b.estado) {
        return 1;
        } else if (a.estado < b.estado) {
        return -1;
        } 
        return 0;
    });
    for (const contribuyente of contribuyentes){
        document.write(contribuyente.id + " - " + contribuyente.nombre + " - " + contribuyente.gestor + " - " + contribuyente.estado + " - " + contribuyente.observaciones + "<br><br>");
        }
}
