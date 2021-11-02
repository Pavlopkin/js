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
/*//////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////FUNCIONES///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////*/
/*----------------------------------Crea y elimina el nodo en DOM------------------------------ */
creaNodo();
muestraPantalla();
function creaNodo(){
    let padre = document.getElementById("lista");
    let a = document.createElement("div");
            a.innerHTML = "<table id='tabla'>"
            padre.appendChild(a);
}
function eliminaDos(){
    var getChild2 = document.getElementById("tabla");  
    getChild2.parentNode.removeChild(getChild2);
    creaNodo();
}
/*--------------------------Crea la cabecera de la tabla----------------------------
----------------------------se ejecuta dentro de varias funciones------------------------------*/
function cabecera(){
    let padre = document.getElementById("tabla");
    let contenedor = document.createElement("tr");
        contenedor.innerHTML = `    <tr class="imprime">
                                    <th class="tituloTabla borra">ID</th>
                                    <th class="tituloTabla borra">Gestor</th>
                                    <th class="tituloTabla borra">Nombre</th>
                                    <th class="tituloTabla borra">Estado</th>
                                    <th class="tituloTabla borra">Observaciones</th>
                                    </tr>`;
        padre.appendChild(contenedor);
        document.getElementsByTagName("tr").className = "impresora";
}
/*--------------------------Crea la estructura de la tabla html----------------------------------
----------------------------se ejecuta dentro de varias funciones--------------------------------------*/
function estructuraTabla(){
    let padre = document.getElementById("tabla");
    for (const contribuyente of contribuyentes) {
        let contenedor = document.createElement("tr");
        contenedor.innerHTML = `    <tr>
                                    <th>${contribuyente.id}</th>
                                    <th>${contribuyente.gestor}</th>
                                    <th>${contribuyente.nombre}</th>
                                    <th>${contribuyente.estado}</th>
                                    <th>${contribuyente.observaciones}</th>
                                    </tr>`;
        padre.appendChild(contenedor);
    }
    let contenedor = document.createElement("tr");
        contenedor.innerHTML = `<br><br><br><br>`;
        padre.appendChild(contenedor);
}
/*-------------------------imprime el listado en el orden en que se cargaron los casos-----*/
function muestraPantalla(){
    cabecera();
    estructuraTabla();
}
/*--------------------------ordena el listado por Nombre-----------------------------------*/
function ordenNombre(){
    eliminaDos();
    creaNodo();
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
    eliminaDos();
    creaNodo();
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
    eliminaDos();
    creaNodo();
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
/*-------------------botones de filtros al listado---------------------------------------------*/
let botonGestor = document.getElementById("btnGestor");
botonGestor.onclick = () =>{ordenGestor()};

let botonNombre = document.getElementById("btnNombre");
botonNombre.onclick = () =>{ordenNombre()};

let botonEstado = document.getElementById("btnEstado");
botonEstado.onclick = () =>{ordenEstado()};

let botonLimpia = document.getElementById("btnLimpia");
botonLimpia.onclick = () =>{eliminaDos()};




