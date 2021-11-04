/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
const usuario = [
    {user: "pablo", pass:"1234", edad:"37", correo:"gomezpablor@gmail.com", cont:"0"},
    {user: "juan", pass:"5678", edad:"45", correo:"usuario@gmail.com", cont:"0" },
    {user: "florencia", pass:"4321", edad:"35", correo:"usuario2@gmail.com", cont:"0"},
];
/*-------------------inicializa variables----------------------------------------*/
let = ingresaNombre = 0;
let = ingresaContraseña = 0;
/*--------------------Valida datos del formulario--------------------------------*/
let formulario = document.getElementById("formularioLogin");
formulario.addEventListener("submit", validacion);

function validacion(e){
    e.preventDefault();
    let formulario = e.target;
    ingresaNombre = formulario.children[1].value;
    ingresaContraseña = formulario.children[3].value;
    console.log(ingresaNombre);
    console.log(ingresaContraseña);
    login();
    document.getElementById('formularioLogin').reset();
}
/*-----------------------verifica que usuario y contraseña sean correctos-------------*/
function login(){
    switch (ingresaNombre){
        case usuario[0].user:
            contraseña(0);
            break;
        case usuario[1].user:
            contraseña(1);
            break;
        case usuario[2].user:
            contraseña(2);
            break;
        default:
            alert("Usuario incorrecto, \n Vuelva a intentarlo");
    }  
}
function contraseña(x){
    if(usuario[x].pass===ingresaContraseña){
        imprimeEnlace();
        imprimeUsuario(x);
        contadorIngresos(x);
    }
    else{
        alert("usuario incorrecto");
    }
}
/*--------------------crea un mensaje con el nombre del usuario-----------------------*/
function imprimeUsuario(x){
    let padre = document.getElementById("usuario");
    let li = document.createElement("li");
    li.innerHTML = usuario[x].user;
    padre.appendChild(li);
}
function imprimeEnlace(){
    let padre = document.getElementById("usuario");
    let li = document.createElement("li");
    li.innerHTML = "<img class='foto' src='./assets/avatar.png'>"
    padre.appendChild(li);
}
/*-----------------cuenta la cantidad de veces que ingresaron usuarios registrados------*/
function contadorIngresos(x){
    let resultadoAnterior = JSON.parse(localStorage.getItem("contador"));
    let sumaUno = resultadoAnterior + 1;
    usuarioGuardar = usuario[x].user;
    localStorage.setItem("contador", sumaUno);
    localStorage.setItem("usuario", usuarioGuardar);
    console.log("Ingreso N°: " + localStorage.contador);
    console.log("Usuario N°: " + localStorage.usuario);
}
