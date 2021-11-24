/*//////////////////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////CASOS///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////*/
const contribuyentes = [];
/*------------------------trae los datos de una api------------------------------------*/
const URLGET = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23"
$.get(URLGET, function (respuesta, estado) {
    if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
                contribuyentes.push({id:dato.id, gestor: dato.species.toUpperCase(), nombre:dato.name.toUpperCase(), estado:dato.status.toUpperCase(), observaciones: dato.origin.name.toUpperCase()});    
        }  
        estructuraTabla();
    }
});
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
    let agregaObservacion = formulario.agregador.children[11].value;
    console.log("observacion" + agregaObservacion);
    let nuevoNombre = formulario.agregador.children[1].value;
    console.log("nombre" + nuevoNombre);
    contribuyentes.push({id: agregaID, gestor: agregaGestor, nombre:nuevoNombre.toUpperCase(), estado:agregaEstado, observaciones: agregaObservacion.toUpperCase()});
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
        $("#tabla").append(`<tr class="imprime">
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
        $("#tabla").append(`<tr>
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
    cabecera();
    estructuraTabla();
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
    cabecera();
    estructuraTabla();
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
    cabecera();
    estructuraTabla();
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
    cabecera();
    estructuraTabla();
}
function ordenId(){
    eliminaDos();
    creaNodo();
    contribuyentes.sort(function(a,b) {
        if (a.id > b.id) {
        return 1;
        } else if (a.id < b.id) {
        return  -1;
        } 
        return 0;
    });
    cabecera();
    estructuraTabla();
}
/*-------------------botones de filtros al listado---------------------------------------------*/
let botonGestor = document.getElementById("btnGestor");
botonGestor.onclick = () =>{ordenGestor()};

let botonNombre = document.getElementById("btnNombre");
botonNombre.onclick = () =>{ordenNombre()};

let botonEstado = document.getElementById("btnEstado");
botonEstado.onclick = () =>{ordenEstado()};

let botonID = document.getElementById("btnID");
botonID.onclick = () =>{ordenId()};

ordenId();





