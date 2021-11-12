/*///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////FORMULARIO LIQUIDACION///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////*/
/*------------------crea nodo para imprimir resultado liquidaicón-------------------------*/
creaNodo();
/*--------------inicializa variables-----------------*/
let intereses = 0;
let intPunitorios = 0;
let iva = 0;
let subtotal = 0;
let tasa = 0;
let sTasa = 0;
let totalLiquidacion = 0;
let monto = 0;
let porcentaje = 0;
let mensajeFecha = 0;
let dias = 0;
/*////////////////////////////////Valida y procesa datos del formulario//////////////////////////// */
$("#formularioDos").submit(function (e) {
    e.preventDefault();
    let formulario = e.target;
    /*-----------------toma datos de inputs------------------*/
    let day = formulario.fechaInicio.children[1].value;
    let month = formulario.fechaInicio.children[3].value;
    let year = formulario.fechaInicio.children[5].value;
    let day2 = formulario.fechaFinal.children[1].value;
    let month2 = formulario.fechaFinal.children[3].value;
    let year2 = formulario.fechaFinal.children[5].value;
    monto = formulario.parametrosLiquidacion.children[1].value;
    porcentaje = formulario.parametrosLiquidacion.children[4].value;
    /*----------une las variables de la fecha y pasa de string a date----------------------*/
    let fechaTexto = year+"/"+month+"/"+day;
    let fechaTexto2 = year2+"/"+month2+"/"+day2;
    let ms = Date.parse(fechaTexto);
	fecha = new Date(ms);
    ms2 = Date.parse(fechaTexto2);
	fecha2 = new Date(ms2);
    /*--------------calcula el tiempo transcurrido entre fechas-------------------------*/
    let difference= Math.abs(fecha2 - fecha);
    dias = difference/(1000 * 3600 * 24);
    mensajeFecha = day+"/"+month+"/"+year+" hasta "+day2+"/"+month2+"/"+year2; /*--ordena fecha para mostrar en DOM ---*/
    muestraResultado();
    document.getElementById('formularioDos').reset();
});
/*//////////////////////////////////////////////////////////////////////////////////
////////FUNCIONES QUE CALCULAN LOS RUBROS DE LA LIQUIDACIÓN////////////////////////
/////////////////////////////////////////////////////////////////////////////////*/
/*----------------Intereses compensatorios----------------------------------------
--(Monto x porcentaje ingresado x dias transcurridos)------------------------------*/
function intCompensatorios(){
    intereses = monto  * (porcentaje/100) *  (dias/365);
    console.log(intereses);
}
/*----------------Intereses punitorios---------------------------------------------
--(Resultado de compensatorios * 0.5)----------------------------------------------*/
function punitorios(){
    if (document.getElementById('radio1').checked){
        intPunitorios = intereses * 0.5;
    }
    else if(document.getElementById('radio2').checked){
        intPunitorios = 0;
    }
}
/*----------------IVA sobre intereses---------------------------------------------
--((intereses compensatorios + intereses punitorios) * 0.21)----------------------*/
function calculaIva(){
    if (document.getElementById('radio8').checked){   
        iva = ((intereses+ intPunitorios) * 0.21);
    }
    else if(document.getElementById('radio9').checked){
        iva = 0;
    }
}
/*----------------Subtotal-----------------------------------------------------------
--(Monto + compensatorios + punitorios + iva)---------------------------------------*/
function sTotal(){
    subtotal = (parseFloat(monto) + parseFloat(intereses) + parseFloat(intPunitorios) + iva);
}
/*----------------Tasa de justicia---------------------------------------------
--(Monto * a)---------------------------------------------------------------------*/
function calculoTasa(a){
    tasa = monto * a;
}
function tasaJusticia(){
    if (document.getElementById('radio3').checked){
        calculoTasa(0.03);
    }
    if(document.getElementById('radio4').checked){
        calculoTasa(0.022);
        sobreTasa();      
    }
    if(document.getElementById('radio5').checked){
        tasa = 0;  
    }  
}
/*----------------sobro Tasa-----------------------------------------------------
--(Tasa * 0.1)------------------------------------------------------------------*/
function sobreTasa(){
    if ((document.getElementById('radio6').checked) && (document.getElementById('radio4').checked)){
        sTasa = tasa * 0.1;
    }
    if(document.getElementById('radio7').checked){
        sTasa = 0;
    }
}
/*----------------TOTAL--------------------------------------------------------------
--(Subtotal + tasa + sobre tasa)----------------------------------------------------*/
function total(){
    totalLiquidacion = subtotal + tasa + sTasa;
}
/*//////////////////////////////Muestra el resultado mediante el DOM////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////*/
/*----------------------------crea el nodo------------------------------------------------*/
function creaNodo(){
    let padre = document.getElementById("form");
    let a = document.createElement("div");
            a.innerHTML = "<div id='liquidacion'>"
            padre.appendChild(a);
}
/*---------------------------elimina el nodo----------------------------------------------*/
function eliminaDos(){
    let getChild2 = document.getElementById("liquidacion");  
    getChild2.parentNode.removeChild(getChild2);
    creaNodo();
}
/*--------------------------imprime el resultado en pantalla------------------------------*/
function muestraResultado(){
    eliminaDos();
    intCompensatorios();
    punitorios();
    calculaIva();
    sTotal();
    tasaJusticia();
    total();
    $("#liquidacion").prepend(`     
                                    <h3 id="atencion"> ATENCIÓN: se ha producido un error, vuelva a ingresar los datos y presione enviar.</h3>
                                    <p id="capital">Capital..................................................................$${monto}.-</p>
                                    <p id="resultadoInteres">Interés compensatorio (TNA ${porcentaje}%) desde <br> 
                                    ${mensajeFecha}.................$${intereses.toFixed(2)}.-</p>
                                    <p id="resultadoPun">Interés punitorio..............................................$${intPunitorios.toFixed(2)}.-</p>
                                    <p id="resultadoIVA">IVA sobre intereses..........................................$${iva.toFixed(2)}.-</p>
                                    <p id="resultadoSub" class="enfasis">Subtotal........................................$${subtotal.toFixed(2)}.-</p>
                                    <p id="resultadoTasa">Tasa de justicia..................................................$${tasa.toFixed(2)}.-</p>
                                    <p id="resultadoST"> Sobre Tasa..........................................................$${sTasa.toFixed(2)}.-</p>
                                    <p id="total" class="enfasis">TOTAL...........................................$${totalLiquidacion.toFixed(2)}.-</p>`);
    if(sTasa != 0){
        $("#resultadoST").show();
    }
    if(tasa != 0){
        $("#resultadoTasa").show();
    }
    if((tasa === 0)&&(sTasa === 0)){
        $("#resultadoSub").hide();
    }
    if(intPunitorios === 0){
        $("#resultadoPun").hide();
    }
    if(iva === 0) {
        $("#resultadoIVA").hide();
    } 
    if (monto === ""){
        $("#total").hide();
        $("#capital").hide();
        $("#interes").hide();
        $("#atencion").show();
        
    }
    if (isNaN(intereses)){
        $("#resultadoInteres").hide();
    }
    if (isNaN(subtotal)){
        $("#resultadoSub").hide();
    }
    if (isNaN(totalLiquidacion)){
        $("#total").hide();
    }
    sTasa = 0;
    tasa = 0;
    iva = 0;
    intPunitorios = 0;
}
/*---------------controla desplegable sobre tasa en formulario #sTasa-------------*/
$("#radio4").click(function() {
    $("#stasa").slideDown(300); 
});
$("#radio5").click(function() {
    $("#stasa").slideUp(300);
});
$("#radio3").click(function() {
    $("#stasa").slideUp(300);
});
/*----------------------------------activa calculadora de tasa de justicia------------*/
$("#btnTasa").click(function (){
    $("#form").hide();
    $("#formularioDos").show();
    formularioTasa();
});
function formularioTasa(){
    $("#tituloLiquidacion").hide();
    $("#fotoLiquidacion").hide();
    $("#porcentajeTitulo").hide();
    $("#porcentajeCampo").hide();
    $("#tituloTasa").slideDown(300);
    $("#parametrosLiquidacion").slideDown(300);
    $("#tasa").slideDown(300);
    $("#btnEnviar").slideDown(300);
    $("#fechaInicio").hide();
    $("#fechaFinal").hide();
    $("#iva").hide();
    $("#punitorios").hide();   
}
/*------------------------------activa calculadora de liquidación tasa anual-----------*/
$("#btnLiq").click(function (){
    $("#form").hide();
    $("#formularioDos").show();
    formularioLiq();
});
function formularioLiq(){
    $("#tituloTasa").hide();
    $("#fotoLiquidacion").hide();
    $("#tituloLiquidacion").slideDown(300);
    $("#parametrosLiquidacion").slideDown(300);
    $("#porcentajeTitulo").show();
    $("#porcentajeCampo").show();
    $("#fechaInicio").show();
    $("#fechaFinal").show();
    $("#punitorios").show();
    $("#iva").show();
    $("#tasa").slideDown(300);
    $("#btnEnviar").slideDown(300);
}


$("#btnEnviar").click(function (){
    
    $("#form").show();
    $("#formularioDos").hide();
   
});