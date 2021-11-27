/*///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////FORMULARIO LIQUIDACION///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////*/
/*------------------crea nodo para imprimir resultado liquidaicón-------------------------*/
creaNodo();
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
    let monto = formulario.parametrosLiquidacion.children[1].value;
    let porcentaje = formulario.parametrosLiquidacion.children[4].value;
    /*----------une las variables de la fecha y pasa de string a date----------------------*/
    let fechaTexto = year+"/"+month+"/"+day;
    let fechaTexto2 = year2+"/"+month2+"/"+day2;
    let ms = Date.parse(fechaTexto);
	let fecha = new Date(ms);
    let ms2 = Date.parse(fechaTexto2);
	let fecha2 = new Date(ms2);
    /*--------------calcula el tiempo transcurrido entre fechas-------------------------*/
    let difference= Math.abs(fecha2 - fecha);
    let dias = difference/(1000 * 3600 * 24);
    if (fecha2 < fecha){
        monto = 0;
    }
    let mensajeFecha = day+"/"+month+"/"+year+" hasta "+day2+"/"+month2+"/"+year2; /*--ordena fecha para mostrar en DOM ---*/
    /*reune los valores que se ulizarán para calcular la liquidación*/
    const valoresIngresados = {monto: monto, porcentaje: porcentaje, dias: dias, mensajeFecha:mensajeFecha};
    calculaLiquidacion(valoresIngresados);
    document.getElementById('formularioDos').reset();
});
/*--------marca los errores en la carga del formulario--------------------------*/
$("#dia1").change(function(){
    if($("#dia1").val() > 31){
        $("#dia1").css({"border": "red solid 3px"});
    }
});
$("#dia1").change(function(){
    if($("#dia1").val() <= 31){
        $("#dia1").css({"border": "solid 1px rgb(1, 8, 100)"});
    }
});
$("#dia2").change(function(){
    if($("#dia2").val() > 31){
        $("#dia2").css({"border": "red solid 3px"});
    }
});
$("#dia2").change(function(){
    if($("#dia2").val() <= 31){
        $("#dia2").css({"border": "solid 1px rgb(1, 8, 100)"});
    }
});
$("#mes1").change(function(){
    if($("#mes1").val() > 12){
        $("#mes1").css({"border": "red solid 3px"});
    }
});
$("#mes1").change(function(){
    if($("#mes1").val() <= 12){
        $("#mes1").css({"border": "solid 1px rgb(1, 8, 100)"});
    }
});
$("#mes2").change(function(){
    if($("#mes2").val() > 12){
        $("#mes2").css({"border": "red solid 3px"});
    }
});
$("#mes2").change(function(){
    if($("#mes2").val() <= 12){
        $("#mes2").css({"border": "solid 1px rgb(1, 8, 100)"});
    }
});
$("#anio2").change(function(){
    if($("#anio1").val() > $("#anio2").val()){
        $("#anio2").css({"border": "red solid 3px"});
    }
});
$("#anio2").change(function(){
    if($("#anio1").val() < $("#anio2").val()){
        $("#anio2").css({"border": "solid 1px rgb(1, 8, 100)"});
    }
});
/*//////////////////////////////////////////////////////////////////////////////////
////////FUNCION QUE CALCULA LA LIQUIDACIÓN////////////////////////
/////////////////////////////////////////////////////////////////////////////////*/
function calculaLiquidacion(valoresIngresados){ 
    let intPunitorios = 0;
    let tasa = 0;
    let sTasa = 0;
    let iva= 0;
    /*calcula intereses*/
    let intereses = valoresIngresados.monto  * (valoresIngresados.porcentaje/100) *  (valoresIngresados.dias/365);
    /*punitorios*/
    if (document.getElementById('radio1').checked){
        intPunitorios = intereses * 0.5;
    }
    else if(document.getElementById('radio2').checked){
        intPunitorios = 0;
    }
    /*iva*/
    if (document.getElementById('radio8').checked){   
        iva = ((intereses+ intPunitorios) * 0.21);
    }
    else if(document.getElementById('radio9').checked){
        iva = 0;
    }
    /*subtotal*/
    subtotal = (parseFloat(valoresIngresados.monto) + parseFloat(intereses) + parseFloat(intPunitorios) + iva);
    /*tasa*/
    if (document.getElementById('radio3').checked){
        tasa = valoresIngresados.monto * 0.03;
    }
    if(document.getElementById('radio4').checked){
        tasa = valoresIngresados.monto * 0.022;
    }
    if(document.getElementById('radio5').checked){
        tasa = 0;  
    }  
    /*stasa*/
    if ((document.getElementById('radio6').checked) && (document.getElementById('radio4').checked)){
        sTasa = tasa * 0.1;
    }
    if(document.getElementById('radio7').checked){
        sTasa = 0;
    }
    let totalLiquidacion = subtotal + tasa + sTasa;
    /*reune los resultados de la liquidación*/
    const rubrosLiquidacion = {monto: valoresIngresados.monto, porcentaje: valoresIngresados.porcentaje, fecha: valoresIngresados.mensajeFecha, intereses: intereses, intPunitorios: intPunitorios, iva: iva, subtotal: subtotal, tasa: tasa, sTasa: sTasa, totalLiquidacion: totalLiquidacion}
    muestraResultado(rubrosLiquidacion);
}
/*//////////////////////////////Muestra el resultado en el DOM////////////////////////
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
function muestraResultado(rubrosLiquidacion){
    eliminaDos();
    $("#liquidacion").prepend(`     
                                    <h3 id="atencion"> ATENCIÓN: <br><br> Se ha producido un error, vuelva a ingresar los datos y presione enviar.</h3>
                                    <p id="capital">Capital..................................................................$${rubrosLiquidacion.monto}.-</p>
                                    <p id="resultadoInteres">Interés compensatorio (TNA ${rubrosLiquidacion.porcentaje}%) desde <br> 
                                    ${rubrosLiquidacion.fecha}.................$${rubrosLiquidacion.intereses.toFixed(2)}.-</p>
                                    <p id="resultadoPun">Interés punitorio..............................................$${rubrosLiquidacion.intPunitorios.toFixed(2)}.-</p>
                                    <p id="resultadoIVA">IVA sobre intereses..........................................$${rubrosLiquidacion.iva.toFixed(2)}.-</p>
                                    <p id="resultadoSub" class="enfasis">Subtotal........................................$${rubrosLiquidacion.subtotal.toFixed(2)}.-</p>
                                    <p id="resultadoTasa">Tasa de justicia..................................................$${rubrosLiquidacion.tasa.toFixed(2)}.-</p>
                                    <p id="resultadoST"> Sobre Tasa..........................................................$${rubrosLiquidacion.sTasa.toFixed(2)}.-</p>
                                    <p id="total" class="enfasis">TOTAL...........................................$${rubrosLiquidacion.totalLiquidacion.toFixed(2)}.-</p>
                                    `);
    if(rubrosLiquidacion.subtotal != 0){
        $("#resultadoST").show();
    }
    if(rubrosLiquidacion.tasa != 0){
        $("#resultadoTasa").show();
    }
    if((rubrosLiquidacion.tasa === 0)&&(rubrosLiquidacion.sTasa === 0)){
        $("#resultadoSub").hide();
    }
    if(rubrosLiquidacion.intPunitorios === 0){
        $("#resultadoPun").hide();
    }
    if(rubrosLiquidacion.iva === 0) {
        $("#resultadoIVA").hide();
    } 
    if (rubrosLiquidacion.monto === ""){
        $("#total").hide();
        $("#capital").hide();
        $("#resultadoInteres").hide();
        $("#atencion").show();
    }
    if (rubrosLiquidacion.monto === 0){
        $("#total").hide();
        $("#capital").hide();
        $("#resultadoInteres").hide();
        $("#atencion").show();
    }
    if (isNaN(rubrosLiquidacion.intereses)){
        $("#resultadoInteres").hide();
    }
    if (isNaN(rubrosLiquidacion.subtotal)){
        $("#resultadoSub").hide();
    }
    if (isNaN(rubrosLiquidacion.totalLiquidacion)){
        $("#total").hide();
    }
    if (rubrosLiquidacion.sTasa === 0){
        $("#resultadoST").hide();
    }
    if ((isNaN(rubrosLiquidacion.intereses))&&(rubrosLiquidacion.tasa === 0)){
        $("#capital").hide();
        $("#atencion").show();
    }
    
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
    $("#btnLimpiar").slideDown(300);
    $(".form ol").hide();
    $(".form h4").hide();
    $("#radio5").hide();
    $("#noTasa").hide();
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
    $("#btnLimpiar").slideDown(300);
    $(".form ol").hide();
    $(".form h4").hide();
    $("#radio5").show();
    $("#noTasa").show();
    /*elimina los bordes rojos cuando retorna de un error*/
    $("#dia1").css({"border": "solid 1px rgb(1, 8, 100)"});
    $("#dia2").css({"border": "solid 1px rgb(1, 8, 100)"});
    $("#mes1").css({"border": "solid 1px rgb(1, 8, 100)"});
    $("#mes2").css({"border": "solid 1px rgb(1, 8, 100)"});
    $("#anio2").css({"border": "solid 1px rgb(1, 8, 100)"});
}
/*-------------aplica cambios en el DOM para mostar el resultado-----------------*/
$("#btnEnviar").click(function (){
    $("#form").show();
    $("#formularioDos").hide();
    $(".form ol").hide();
    $(".form h4").hide();
});
/*----------------------limpia los campos del formulario-------------------------*/
function limpiarFormulario() {
    document.getElementById("#formularioDos").reset();
}
/*---------------------boton para limpiar campos del formulario--------------*/
$("#btnLimpiar").click(function (){    
    limpiarFormulario();  
});
/*-----------------Explica el procedimiento para calcular liquidación--------*/
$(".form").prepend(`<h4> ¿Cómo hacer una liquidación?</h4>
<ol style="list-style: none; margin-left: -50px"><li id="itemUno">Haga clic sobre la opción deseada</li>
<li id="itemDos">Complete los campos del formulario</li>
<li id="itemTres">Utilice "." (punto) para los decimales"</li>
<li id="itemCuatro">Presione "Enviar"</li>
<li id="itemCinco">Haga clic sobre la opción deseada para comenzar</li></ol>`);
/*----------------animación del título----------------------------------*/
$(".form h4").css("color", "white")
    .slideDown("slow")
    .delay(16000)
    .fadeOut("slow");
/*---------------crea funcion de animación-------------------------*/
function animaUno(a,b){
    $(a).css("color", "white")
    .hide()
    .delay(b)
    .slideDown("slow")
    .delay(2500)
    .fadeOut("slow");
}    
$("#itemCinco").css("color", "white")
    .hide()
    .delay(17000)
    .fadeIn("slow");
/*--------------aplica la animación a los items del instructivo-----------*/
animaUno("#itemUno", 1500);
animaUno("#itemDos", 5000);
animaUno("#itemTres", 8500);
animaUno("#itemCuatro", 12000);
/*--------------aplica estilos al instructivo----------------------------*/
$(".form h4").css({"font-size": "3em", "font-weight": "800"});
$(".form li").css({"font-size": "1.5em", "margin-top": "50px", "font-weight": "800"});
$("#itemCinco").css({"font-size": "2em", "margin": "20% auto", "width": "70%"});



