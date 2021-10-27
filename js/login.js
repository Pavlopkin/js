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
        this.contraseña = function(){
            if(pass==validacionDos){
                this.imprimeUsuario();
                this.imprimeEnlace();
                this.mensaje();
            }
            else{
                alert("usuario incorrecto");
            }
        }
        this.imprimeUsuario = function(){
            let padre = document.getElementById("usuario");
            let li = document.createElement("li");
            li.innerHTML = "Bienvenido/a " + user;
            padre.appendChild(li);
        }
        this.imprimeEnlace = function(){
            let padre = document.getElementById("usuario");
            let li = document.createElement("li");
            li.innerHTML = "<p> Mi cuenta </p>";
            padre.appendChild(li);
        }
        this.mensaje = function(){
            let padre = document.getElementById("cambia");
            let a = document.createElement("a");
            a.innerHTML = "<a class='cerrar'class='btn btn-primary' href='javascript:;' onclick='elimina()'>X</a>"
            padre.appendChild(a);
            let p = document.createElement("p");
            p.innerHTML = "<p class='flotante'><span>Mi cuenta</span><br><br><br>Usuario:" + user + "<br><br>Mail:" + correo + "</p>"
            padre.appendChild(p);
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
            break;
        case usuario2.user: 
            usuario2.contraseña();
            break;
        case usuario3.user:  
            usuario3.contraseña();
            break;
        default:
            alert("Usuario incorrecto, \n Vuelva a intentarlo");
    }   
}

