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
/*/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////OBJETOS - VALIDACIÓN DE USUARIO - //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
function usuario(user, pass, edad, nivel, correo) {
    this.user= user;
    this.pass= pass;
    this.edad= edad;
    this.nivel= nivel;
    this.correo= correo;
    this.firma = function(){document.write("<br> <br> calculo realizado por " + user)}
    this.contraseña = function(){ if (pass == validacionDos){
        alert("Bienvenido " +  user);
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
        liquidacion();
        usuario1.firma();
        break;
    case usuario2.user:
        usuario2.contraseña();
        liquidacion();
        usuario1.firma();
        break;
    case usuario3.user:
        usuario3.contraseña();
        liquidacion();
        usuario1.firma();
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
    document.write("Interes compensatorio desde " + mora + " hasta " + fechaLiquidacion + "<br> (TNA " + tasa + "%)____________________________$" + intereses.toFixed(2) + "<br>");
}
/*------------------------Intereses Punitorios-----------------------*/
function intPunitorios(){
    let controlUno = prompt("¿desea incorporar intereses punitorios? \n Ingrese 'SI' para confirmar");
    if ((controlUno == "SI") || (controlUno == "Si") || (controlUno == "si")){
        punitorios = intereses * 0.5;
        document.write("Intereses Punitorios (50% de los compensatorios)$" + punitorios.toFixed(2) + "<br>");
    }
    else{
        punitorios;
    }
}
/*------------------------Intereses IVA-----------------------*/
function calculoIVA(){
    let controlDos = prompt("¿desea calcular el IVA? \n Ingrese 'SI' para confirmar");
    if ((controlDos == "SI") || (controlDos == "Si") || (controlDos == "si")){
        iva = ((intereses+punitorios) * 0.21);
        document.write("IVA sobre intereses______________________$" + iva.toFixed(2) + "<br>");
    }
    else{
        iva;
    }
}
/*------------------------Intereses subtotal-----------------------*/
function sTotal(){
    sub = (deuda + intereses + punitorios + iva);
    document.write("Subtotal_____________________________$"+ sub.toFixed(2) + "<br>");
}
/*------------------------Calcula el total de la Liquidacion-----------------------*/
function totalLiquidacion(){
    tot = sub + gastos;
    document.write("TOTAL________________________________$" + tot.toFixed(2));
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

    if ((controlTres == "SI") || (controlTres == "Si") || (controlTres == "si")){
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
        document.write("GASTOS (Tasa de Justicia)_____________________$" + gastos.toFixed(2) + "<br>");
    }
    else{
        gastos = sobreTasa + tasaJ;
        document.write("GASTOS (Tasa de Justicia + Sobre Tasa)_________________$" + gastos.toFixed(2) + "<br>");
    }
}
/*----------liquidacion---------*/
function liquidacion(){
    let control = prompt("¿desea calcular una liquidación?");
    
    if ((control == "SI") || (control == "Si") || (control == "si")){
        mora = prompt("ingrese la fecha de mora \n MM/DD/AAAA");
        fechaLiquidacion = prompt("ingrese la fecha a la que actualiza la deuda \n MM/DD/AAAA");
        deuda = parseInt(prompt('ingrese el monto de la deuda'));
        tasa = parseFloat(prompt("ingrese la tasa aplicable"));
        let diaUno = new Date(mora);
        let diaDos = new Date(fechaLiquidacion);
        let difference= Math.abs(diaDos-diaUno);
        dias = difference/(1000 * 3600 * 24)
        document.write("Capital_________________________________$" + deuda + "<br>");
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