/*//////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////CASOS///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////*/
const contribuyentes = [
    {id:1, gestor: "MAU", nombre:'CONTRIBUYENTE UNO', estado:'PREVIO', observaciones: "DENUN FECHA Y NRO MC"},
    {id:2, gestor: "MAU", nombre:'CONTRIBUYENTE DOS', estado:'PREVIO', observaciones: "ADJUNTAR ACUERDO LEGIBLE"},
    {id:3, gestor: "MAX", nombre:'CONTRIBUYENTE TRES', estado:'PREVIO', observaciones: "ACREDITAR MC"},
    {id:4, gestor: "MAX", nombre:'CONTRIBUYENTE CUATRO', estado:'PREVIO', observaciones: "ACREDITAR TRABA MC"},
    {id:5, gestor: "NAT", nombre:'CONTRIBUYENTE CINCO', estado:'PEDIDO', observaciones: "SOLICITA LEVANT MC"},
    {id:6, gestor: "MAX", nombre:'CONTRIBUYENTE SEIS', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:7, gestor: "NAT", nombre:'CONTRIBUYENTE SIETE', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:8, gestor: "MAX", nombre:'CONTRIBUYENTE OCHO', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:9, gestor: "MAX", nombre:'CONTRIBUYENTE NUEVE', estado:'CONFRONTE', observaciones: "OFICIO IGB RPA"},
    {id:10, gestor: "MAX", nombre:'CONTRIBUYENTE DIEZ', estado:'PREVIO', observaciones: "ACLARAR DESISTIMIENTO"},
    {id:11, gestor: "MAX", nombre:'CONTRIBUYENTE ONCE', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:12, gestor: "MAU", nombre:'CONTRIBUYENTE DOCE', estado:'INGRESADO', observaciones: "REGISTRO PROPIEDAD INMUEBLE"},
    {id:13, gestor: "PER", nombre:'CONTRIBUYENTE TRECE', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"},
    {id:14, gestor: "PER", nombre:'CONTRIBUYENTE CATORCE', estado:'PEDIDO', observaciones: "SOLICITA LEVANTAMIENTO MC"},
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
/*//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////agrega un objeto al array////////////////////////////////*/
$("#formAgrega").submit(function (e) {
    e.preventDefault();
    let formulario = e.target;
    /*-----------------toma datos de inputs------------------*/
    eliminaDos()
    let agregaID = contribuyentes.length + 1
    console.log("cantidad de objetos " + agregaID)
    let agregaGestor = document.getElementById('selectorGestor').value;
    console.log("gestor" + agregaGestor)
    let agregaEstado = document.getElementById('agregaEstado').value;
    console.log("estado" + agregaEstado);
    let agregaObservacion = formulario.agregador.children[5].value;
    console.log("observacion" + agregaObservacion);
    let nuevoNombre = formulario.agregador.children[1].value;
    console.log("nombre" + nuevoNombre);
    contribuyentes.push({id: agregaID, gestor: agregaGestor, nombre:nuevoNombre, estado:agregaEstado, observaciones: agregaObservacion});
    muestraPantalla()
    document.getElementById('formAgrega').reset();
    });
/*-----------boton que activa el formulario para agregar casos---------------------*/
$("#btnAgregar").click(function (){   
    $("#formCasos").hide(); 
    $("#formAgrega").slideDown(1000);
});
/*-------------------cierra el formulario----------------------------------------*/
$("#formAgrega p").click(function (){    
    $("#formAgrega").slideUp(1000);
});
/*//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////cambia los datos de uno de los objetos de array//////////////////////////*/
function cambiaDatos(identificador, nuevaObservacion, nuevoEstado){
    eliminaDos()
    contribuyentes.map(function(dato){
        if(dato.id == identificador){
            dato.observaciones = nuevaObservacion.toUpperCase();
            dato.estado = nuevoEstado;
        }
})};
$("#formCasos").submit(function (e) {
e.preventDefault();
let formulario = e.target;
/*-----------------toma datos de inputs------------------*/
let identificador = document.getElementById('selectorCasos').value;
console.log("identificador" + identificador)
let identificaEstado = document.getElementById('selectorEstados').value;
console.log(identificaEstado);
let nuevaObservacion = formulario.modificador.children[6].value;
console.log("observacion" + nuevaObservacion);
let nuevoEstado = formulario.modificador.children[5].value;
console.log("estado" + nuevoEstado);
cambiaDatos(identificador, nuevaObservacion, nuevoEstado);
muestraPantalla()
document.getElementById('formCasos').reset();
});
/*---------------------boton que activa el formulario para cambiar datos--------------*/
$("#btnCambiar").click(function (){  
    $("#formAgrega").hide();  
    $("#formCasos").slideDown(1000);
});
/*---------------------cierra el formulario----------------------------------*/
$("#formCasos p").click(function (){    
    $("#formCasos").slideUp(1000);
});
/*////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////APLICANDO CAMBIOS EN EL DOM/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/*--------------------------Crea la cabecera de la tabla----------------------------
----------------------------se ejecuta dentro de varias funciones------------------------------*/
function cabecera(){
        $("#tabla").prepend(`<tr class="imprime">
        <th class="tituloTabla borra">ID</th>
        <th class="tituloTabla borra">Gestor</th>
        <th class="tituloTabla borra">Nombre</th>
        <th class="tituloTabla borra">Estado</th>
        <th class="tituloTabla borra">Observaciones</th>
        </tr>`);
}
/*------------------------Crea la estructura de la tabla html-------------------------------------------
----------------------------se ejecuta dentro de varias funciones--------------------------------------*/
function estructuraTabla(){
    for (const contribuyente of contribuyentes) {
        $("#tabla").prepend(`<tr>
        <th>${contribuyente.id}</th>
        <th>${contribuyente.gestor}</th>
        <th>${contribuyente.nombre}</th>
        <th>${contribuyente.estado}</th>
        <th>${contribuyente.observaciones}</th>
        </tr>`);
        $("#selectorCasos").prepend(`
        <option value="${contribuyente.id}">"${contribuyente.nombre}"</option>`);
    }
}
/*-------------------------imprime el listado en el orden en que se cargaron los casos-----*/
function muestraPantalla(){
    estructuraTabla();
    cabecera();
}
/*--------------------------ordena el listado por Nombre-----------------------------------*/
function ordenNombre(){
    eliminaDos();
    creaNodo();
    contribuyentes.sort(function(a,b) {
        if (a.nombre > b.nombre) {
        return 1;
        } else if (a.nombre < b.nombre) {
        return  -1;
        } 
        return 0;
    });
    estructuraTabla();
    cabecera();
}
/*--------------------------ordena el listado por Estado-----------------------------------*/
function ordenEstado(){
    eliminaDos();
    creaNodo();
    contribuyentes.sort(function(a,b) {
        if (a.estado > b.estado) {
        return 1;
        } else if (a.estado < b.estado) {
        return  -1;
        } 
        return 0;
    });
    estructuraTabla();
    cabecera();
}
/*--------------------------ordena el listado por gestor-----------------------------------*/
function ordenGestor(){
    eliminaDos();
    creaNodo();
    contribuyentes.sort(function(a,b) {
        if (a.gestor > b.gestor) {
        return 1;
        } else if (a.gestor < b.gestor) {
        return  -1;
        } 
        return 0;
    });
    estructuraTabla();
    cabecera();
}
/*-------------------botones de filtros al listado---------------------------------------------*/
let botonGestor = document.getElementById("btnGestor");
botonGestor.onclick = () =>{ordenGestor()};

let botonNombre = document.getElementById("btnNombre");
botonNombre.onclick = () =>{ordenNombre()};

let botonEstado = document.getElementById("btnEstado");
botonEstado.onclick = () =>{ordenEstado()};





