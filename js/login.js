/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
const usuario = [
    {user: "pablo", pass:"1234", edad:"37", correo:"gomezpablor@gmail.com", cont:"0"},
    {user: "juan", pass:"5678", edad:"45", correo:"usuario@gmail.com", cont:"0" },
    {user: "florencia", pass:"4321", edad:"35", correo:"usuario2@gmail.com", cont:"0"},
];

/*--------------------Valida datos del formulario--------------------------------*/
let formulario = document.getElementById("formularioLogin");
formulario.addEventListener("submit", validacion);

let mensaje = localStorage.getItem('Bienvenid@');
$("#usuario").append(`<p>${mensaje}</p>`);

function validacion(e){
    
    
    e.preventDefault();
    let formulario = e.target;
    let ingresaNombre = formulario.children[1].value;
    let ingresaContraseña = formulario.children[3].value;
    console.log(ingresaNombre);
    console.log(ingresaContraseña);
    for (const data of usuario) {
        if((data.user === ingresaNombre) && (data.pass === ingresaContraseña)){
            console.log("funciona" + data.user);
            localStorage.setItem('Bienvenid@', data.user);
            mensaje = localStorage.getItem('Bienvenid@');
            console.log(mensaje);
            $("#usuario").append(`<p>${mensaje}</p>`);
        }
    }
    document.getElementById('formularioLogin').reset();
}









