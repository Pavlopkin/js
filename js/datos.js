/*//////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////CASOS///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////*/
const contribuyentes = [
    {id:1, gestor: "MAU", nombre:'MELONI DIEGO EZEQUIEL', estado:'PREVIO', observaciones: "DENUN FECHA Y NRO MC"},
    {id:2, gestor: "MAU", nombre:'AKLE AMANCIO', estado:'PREVIO', observaciones: "ADJUNTAR ACUERDO LEGIBLE"},
    {id:3, gestor: "MAX", nombre:'IDO BENTIVOGLI', estado:'PREVIO', observaciones: "ACREDITAR MC"},
    {id:4, gestor: "MAX", nombre:'STOJADINOVIC VIVIANA', estado:'PREVIO', observaciones: "ACREDITAR TRABA MC"},
    {id:5, gestor: "NAT", nombre:'SCHMALE OSVALDO ANDRES', estado:'PEDIDO', observaciones: "SOLICITA LEVANT MC"},
    {id:6, gestor: "MAX", nombre:'TORRE MAY CLARA', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:7, gestor: "NAT", nombre:'LAFFUE DOLORES', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:8, gestor: "MAX", nombre:'LUGO ELIO RICARDO', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:9, gestor: "MAX", nombre:'CARRIZO NESTOR JAVIER', estado:'CONFRONTE', observaciones: "OFICIO IGB RPA"},
    {id:10, gestor: "MAX", nombre:'ANDRADE SILVIA SUSANA', estado:'PREVIO', observaciones: "ACLARAR DESISTIMIENTO"},
    {id:11, gestor: "MAX", nombre:'FRISCH JUAN JOSE', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:12, gestor: "MAU", nombre:'GALVAN LEOPOLDO FEDERICO', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:13, gestor: "PER", nombre:'SOLIZ SOLIZ MARCIAL JAIME', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"},
    {id:14, gestor: "PER", nombre:'CAGLI EROL', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"},
    ];
/*------------variable global---------------------*/
let padre = document.getElementById("impresora");
/*//////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////FUNCIONES///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////*/

/*--------------------------Crea la cabecera de la tabla----------------------------
----------------------------se ejecuta dentro de varias funciones------------------------------*/
function cabecera(){
    let contenedor = document.createElement("tr");
        contenedor.innerHTML = `
                                    <th class="tituloTabla">ID</th>
                                    <th class="tituloTabla">Gestor</th>
                                    <th class="tituloTabla">Nombre</th>
                                    <th class="tituloTabla">Estado</th>
                                    <th class="tituloTabla">Observaciones</th>`;
        padre.appendChild(contenedor);
}
/*--------------------------Crea la estructura de la tabla html----------------------------------
----------------------------se ejecuta dentro de varias funciones--------------------------------------*/
function estructuraTabla(){
    for (const contribuyente of contribuyentes) {
        let contenedor = document.createElement("tr");
        contenedor.innerHTML = `
                                    <th>${contribuyente.id}</th>
                                    <th>${contribuyente.gestor}</th>
                                    <th>${contribuyente.nombre}</th>
                                    <th>${contribuyente.estado}</th>
                                    <th>${contribuyente.observaciones}</th>`;
        padre.appendChild(contenedor);
    }
}
/*-------------------------imprime el listado en el orden en que se cargaron los casos-----*/
function muestraPantalla(){
    cabecera();
    estructuraTabla();
}
/*--------------------------ordena el listado por Nombre-----------------------------------*/
function ordenNombre(){
    cabecera();
    contribuyentes.sort(function(a,b) {
        if (a.nombre > b.nombre) {
        return 1;
        } else if (a.nombre < b.nombre) {
        return  -1;
        } 
        return 0;
    });
    estructuraTabla();
}
/*--------------------------ordena el listado por Estado-----------------------------------*/
function ordenEstado(){
    cabecera();
    contribuyentes.sort(function(a,b) {
        if (a.estado > b.estado) {
        return 1;
        } else if (a.estado < b.estado) {
        return  -1;
        } 
        return 0;
    });
    estructuraTabla();
}
/*--------------------------ordena el listado por gestor-----------------------------------*/
function ordenGestor(){
    cabecera();
    contribuyentes.sort(function(a,b) {
        if (a.gestor > b.gestor) {
        return 1;
        } else if (a.gestor < b.gestor) {
        return  -1;
        } 
        return 0;
    });
    estructuraTabla();
}
/*--------elimina listado: no se usa porque una vez que borra todo no permite cargar filtros--
-----------a fin de probar el funcionamiento de la página usé location.reload()-*/
function eliminaLista(){
    var getChild2 = document.getElementById("impresora");  
    getChild2.parentNode.removeChild(getChild2);
}

