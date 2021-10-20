/*-----------------inicializando variables globales que se utilizan en funciones--------*/
let tasa = 0;
let dias = 0;
let intereses = 0;
let punitorios = 0;
let tasaJ = 0;
let sobreTasa = 0;
let gastos = 0;
let iva = 0;
let sub = 0;
let deuda = 0;
let mora = 0;
let fechaLiquidacion = 0;
let tot = 0;
/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
function usuario(user, pass, edad, nivel, correo) {
    this.user= user;
    this.pass= pass;
    this.edad= edad;
    this.nivel= nivel;
    this.correo= correo;
    this.firma = function(){document.write("<br> <br>" + " calculo realizado por " + user)}
    this.contraseña = function(){ if (pass == validacionDos){
        alert(" Bienvenid@ " +  user);
        liquidacion();
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
/*///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////FUNCIONES//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////*/
/*------------------------Intereses Compensatorios-----------------------*/
function intCompensatorios(){
    let porcentaje = tasa / 100;
    let tiempo = dias / 365;
    intereses = deuda  * porcentaje *  tiempo;
    document.write("<p>Interes compensatorio desde " + mora + " hasta " + fechaLiquidacion + "<br> (TNA " + tasa + "%)</p>" + "<p>" + intereses.toFixed(2) + "</p><br>");
}
/*------------------------Intereses Punitorios-----------------------*/
function intPunitorios(){
    let controlUno = prompt("¿desea incorporar intereses punitorios? \n Ingrese 'SI' para confirmar");
    if (controlUno.toUpperCase() == "SI") {
        punitorios = intereses * 0.5;
        document.write("<p> Intereses Punitorios (50% de los compensatorios)</p>" + "<p> $" + punitorios.toFixed(2) + "</p><br>");
    }
    else{
        punitorios;
    }
}
/*------------------------Intereses IVA-----------------------*/
function calculoIVA(){
    let controlDos = prompt("¿desea calcular el IVA? \n Ingrese 'SI' para confirmar");
    if (controlDos.toUpperCase() == "SI"){
        iva = ((intereses+punitorios) * 0.21);
        document.write("<p> IVA sobre intereses </p>" + "<p> $" + iva.toFixed(2) + "</p><br>");
    }
    else{
        iva;
    }
}
/*------------------------Intereses subtotal-----------------------*/
function sTotal(){
    sub = (deuda + intereses + punitorios + iva);
    document.write("<p> Subtotal </p>"+ "<p>$ " + sub.toFixed(2) + "</p><br>");
}
/*------------------------Calcula el total de la Liquidacion-----------------------*/
function totalLiquidacion(){
    tot = sub + gastos;
    document.write("<p>TOTAL</p>" + "<p>" + tot.toFixed(2) + "</p><br>");
}
/*//////////////////////////////////////////////////////////////////////
////////////////////////GASTOS/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////*/
/*----------Tasa Capital Federal---------*/
function tasaCaba(){
    tasaJ = deuda * 0.03;
}
/*----------Tasa Pcia. Bs. As.---------*/
function tasaPcia(){
    tasaJ = deuda * 0.022;
    sTasa();
}
/*----------Selector tipo de tasa---------*/
function tasaJusticia(){
    let controlTasa = prompt("Que porcentaje desea aplicar? \n Ingrese '1' para aplicar el 3%, \n Ingrese '2' para aplicar el 2.2%");
    switch (controlTasa){
        case '1':
            tasaCaba();
            break;
        case '2':
            tasaPcia();
            break;
        default:
            tasaJ = 0;
            alert("no se incluirá tasa de justicia");
    }    
}
/*----------Sobre Tasa de Justicia (aplica solo en Tasa Pcia---------*/
function sTasa(){
    let controlTres = prompt("¿desea calcular la sobre Tasa? \n Ingrese 'SI' para confirmar");
    if (controlTres.toUpperCase() == "SI"){
        sobreTasa = tasaJ * 0.1;
    }
    else{
        sobreTasa;
    }
}
/*----------Compara e imprime gastos en pantalla---------*/
function totalGastos(){
    if (sobreTasa == 0){
        gastos = tasaJ;
        document.write("<p> GASTOS (Tasa de Justicia)</p>" + "<p> $" + gastos.toFixed(2) + "</p><br>");
    }
    else{
        gastos = sobreTasa + tasaJ;
        document.write("<p> GASTOS (Tasa de Justicia + Sobre Tasa)</p>" + "<p> $" + gastos.toFixed(2) + "</p><br>");
    }
}
/*----------liquidacion---------*/
function liquidacion(){
    let control = prompt("¿desea calcular una liquidación?");
    if (control.toUpperCase() == "SI"){
        mora = prompt("ingrese la fecha de mora \n MM/DD/AAAA");
        fechaLiquidacion = prompt("ingrese la fecha a la que actualiza la deuda \n MM/DD/AAAA");
        deuda = parseInt(prompt('ingrese el monto de la deuda'));
        tasa = parseFloat(prompt("ingrese la tasa aplicable"));
        let diaUno = new Date(mora);
        let diaDos = new Date(fechaLiquidacion);
        let difference= Math.abs(diaDos-diaUno);
        dias = difference/(1000 * 3600 * 24)
        document.write("<p> Capital</p>" + deuda + "<br>");
        intCompensatorios();
        intPunitorios();
        calculoIVA();
        sTotal();
        tasaJusticia();
        totalGastos();
        totalLiquidacion();
    }
    else{
        alert("si quiere realizar un nuevo cálculo presione f5");
    }
}