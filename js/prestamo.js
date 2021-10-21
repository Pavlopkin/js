/*---------------Variables Globales----------------------------*/
let deuda = parseFloat(prompt("ingrese el monto de la deuda"));
let cuota = parseInt(prompt("igrese el nro de cuotas"));
/*------------------funciones---------------------------------*/
/* a-Cuotas s/ intereses (aplica en switch 3, 6 y 9)----*/
function sinIntereses(){
    cadaCuota = (deuda / cuota);
    deudaTotal = deuda;
    alert("Usted abonara la suma de $" + deuda + " en " + cuota + " cuotas sin interes");
    alert("el monto a abonar por cada cuota es " + cadaCuota.toFixed(2));
    nuevoContenido();
}
/* b-Cuotas c/ intereses (aplica en switch 18 y 24)----*/
function conIntereses(){   
    if (cuota > 18){
        let = tasa = 38;
    }
    else{
        let = tasa = 25;
    }
    porcentaje = tasa/1200;
    intereses = deuda * 0.028 * cuota;
    deudaTotal = intereses + deuda;
    cadaCuota = deudaTotal / cuota; 
    alert("Usted abonara la suma de $" + deudaTotal.toFixed(2) + " en " + cuota + " cuotas con un interés de " + tasa + " %");
    alert("el monto a abonar por cada cuota es " + cadaCuota.toFixed(2));
    nuevoContenido();
}
/* c-Imprime resultado en pantalla----*/
function nuevoContenido(){
    document.write("RESULTADO<br>");
    document.write("Abonará $ " + deudaTotal.toFixed(2) + " en " + cuota + " cuotas:");
    document.write("<br>");  
    for (i=1; i <= cuota; i++){
        document.write("<p> Cuota " + i + " = " + cadaCuota.toFixed(2) + "</p>");
        document.write("<br>");
    } 
    document.write("--------------------------<br>");
    document.write("<p> $" + deudaTotal.toFixed(2) + "</p>");   
}

switch (cuota){
    case 3:
        sinIntereses();
        break;
    case 6:
        sinIntereses();
        break;
    case 9:
        sinIntereses();
        break;
    case 12:
        sinIntereses();
        break;
    case 18:
        conIntereses();
        break;
    case 24:
        conIntereses();
        break;
    default:
        alert("no existe el plan de pagos seleccionado, vuelva a intentarlo");
}    






