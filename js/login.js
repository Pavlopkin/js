/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
const usuario = [
    {user: "pablo", pass:"1234", edad:"37", correo:"gomezpablor@gmail.com"},
    {user: "juan", pass:"5678", edad:"45", correo:"usuario@gmail.com"},
    {user: "florencia", pass:"4321", edad:"35", correo:"usuario2@gmail.com"},
];

function login(){
    let ingresaNombre = prompt("ingrese su nombre");
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
    let ingresaContraseña = prompt("ingrese su contraseña"); 
        
    if(usuario[x].pass===ingresaContraseña){
        imprimeEnlace();
        imprimeUsuario(x);
        mensaje(x);
    }
    else{
        alert("usuario incorrecto");
    }
}
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