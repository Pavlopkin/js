/*---------------variables globales ingresadas por el usuario------------------*/
let deuda = parseFloat(prompt('ingrese el monto de la deuda'));
/*-----------------inicializando variables globales que se utilizan en funciones--------*/
let tasaJ = 0;
let sobreTasa = 0;
let gastos = 0;
/*///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////CÓDIGO QUE SE EJECUTA//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////*/
document.write("Monto de origen_________________________________$" + deuda + "<br>");
tasaJusticia();
totalGastos();
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
        document.write("Tasa de Justicia___________________________________$" + tasaJ.toFixed(2) + "<br>");
        document.write("GASTOS (Tasa de Justicia)___________________________$" + gastos.toFixed(2) + "<br>");
    }
    else{
        gastos = sobreTasa + tasaJ;
        document.write("Tasa de Justicia___________________________________$" + tasaJ.toFixed(2) + "<br>");
        document.write("Sobre Tasa______________________________________$" + sobreTasa.toFixed(2) + "<br>");
        document.write("GASTOS (Tasa de Justicia + Sobre Tasa)_________________$" + gastos.toFixed(2) + "<br>");
    }
}