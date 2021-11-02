/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
const usuario = [
    {user: "pablo", pass:"1234", edad:"37", correo:"gomezpablor@gmail.com"},
    {user: "juan", pass:"5678", edad:"45", correo:"usuario@gmail.com"},
    {user: "florencia", pass:"4321", edad:"35", correo:"usuario2@gmail.com"},
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
function mensaje(x){
    let padre = document.getElementById("cambia");
            let a = document.createElement("a");
            a.innerHTML = "<a class='cerrar'class='btn btn-primary' href='javascript:;' onclick='elimina()'>X</a>"
            padre.appendChild(a);
            let p = document.createElement("p");
            p.innerHTML = "<p class='flotante'><span>Mi cuenta</span><br><br><br>Usuario:" + usuario[x].user + "<br><br>Mail:" + usuario[x].correo + "</p>"
            padre.appendChild(p);
}