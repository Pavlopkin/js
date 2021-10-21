/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
function login(){
    function usuario(user, pass, edad, nivel, correo) {
        this.user= user;
        this.pass= pass;
        this.edad= edad;
        this.nivel= nivel;
        this.correo= correo;
        this.contraseña = function(){ if (pass == validacionDos){
            alert(" Bienvenid@ " +  user);
            }
            else{
                alert("usuario incorrecto")
            }    
        }
    }
    const usuario1 = new usuario("pablo", "1234", "37", "admin", "gomezpablor@gmail.com");
    const usuario2 = new usuario("juan", "5678", "45", "usuario", "usuario@gmail.com");
    const usuario3 = new usuario("florencia", "4321", "35", "usuario", "usuario2@gmail.com");

    let validacion = prompt("ingrese su nombre");
    let validacionDos = prompt("ingrese su contraseña");
    switch (validacion){
        case usuario1.user:
            usuario1.contraseña();
            usuario1.firma();
            break;
        case usuario2.user:
            usuario2.contraseña();
            usuario2.firma();
            break;
        case usuario3.user:
            usuario3.contraseña();
            usuario3.firma();
            break;
        default:
            alert("Usuario incorrecto, \n Vuelva a intentarlo");
    }
}
