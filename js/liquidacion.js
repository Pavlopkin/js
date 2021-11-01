/*///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////FORMULARIO LIQUIDACION///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////*/

/*////////////////////////////////Valida y procesa datos del formulario//////////////////////////// */
let formularioDos = document.getElementById("formularioDos");
formularioDos.addEventListener("submit", formularioLiquidacion);

function formularioLiquidacion(e){
    e.preventDefault();
    let formulario = e.target;
    /*--------------inicializa variables-----------------*/
    let intereses = 0;
    let intPunitorios = 0;
    let iva = 0;
    let subtotal = 0;
    let tasa = 0;
    let sTasa = 0;
    let totalLiquidacion = 0;
    /*-----------------toma datos de inputs------------------*/
    let day = formulario.fechaInicio.children[1].value;
    let month = formulario.fechaInicio.children[3].value;
    let year = formulario.fechaInicio.children[5].value;
    let day2 = formulario.fechaFinal.children[1].value;
    let month2 = formulario.fechaFinal.children[3].value;
    let year2 = formulario.fechaFinal.children[5].value;
    let monto = formulario.parametrosLiquidacion.children[1].value;
    let porcentaje = formulario.parametrosLiquidacion.children[3].value;
    /*----------une las variables de la fecha y pasa de string a date----------------------*/
    let fechaTexto = year+"/"+month+"/"+day;
    let fechaTexto2 = year2+"/"+month2+"/"+day2;
        ms = Date.parse(fechaTexto);
	fecha = new Date(ms);
    console.log(fecha);
    ms2 = Date.parse(fechaTexto2);
	fecha2 = new Date(ms2);
    /*--------------calcula el tiempo transcurrido entre fechas-------------------------*/
    let difference= Math.abs(fecha2 - fecha);
    console.log(difference);
    dias = difference/(1000 * 3600 * 24);
    console.log(dias);
    /*//////////////////////////////////////////////////////////////////////////////////
    ////////FUNCIONES QUE CALCULAN LOS RUBROS DE LA LIQUIDACIÓN////////////////////////
    /////////////////////////////////////////////////////////////////////////////////*/
    /*----------------Intereses compensatorios----------------------------------------
    --(Monto x porcentaje ingresado x dias transcurridos)------------------------------*/
    function intCompensatorios(){
        intereses = monto  * (porcentaje/100) *  (dias/365);
    }
    /*----------------Intereses punitorios---------------------------------------------
    --(Resultado de compensatorios * 0.5)----------------------------------------------*/
    function punitorios(){
        if (document.getElementById('radio1').checked){
            intPunitorios = intereses * 0.5;
        }
        else if(document.getElementById('radio2').checked){
            alert("sin punitorios");
        }
    }
    /*----------------IVA sobre intereses---------------------------------------------
    --((intereses compensatorios + intereses punitorios) * 0.21)----------------------*/
    function CalculaIva(){
        if (document.getElementById('radio8').checked){   
            iva = ((intereses+ intPunitorios) * 0.21);
        }
        else if(document.getElementById('radio9').checked){
            alert("sin iva");
        }
    }
    /*----------------Subtotal-----------------------------------------------------------
    --(Monto + compensatorios + punitorios + iva)---------------------------------------*/
    function sTotal(){
        subtotal = (parseFloat(monto) + parseFloat(intereses) + parseFloat(intPunitorios) + iva);
        console.log("subtotal = " + subtotal.toFixed(2));
    }
    /*----------------Tasa de justicia---------------------------------------------
    --(Monto * a)---------------------------------------------------------------------*/
    function calculoTasa(a){
        tasa = monto * a;
        console.log("tasa = "+ tasa);
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
            console.log(tasa);
        }
    }
    /*----------------sobro Tasa-----------------------------------------------------
    --(Tasa * 0.1)------------------------------------------------------------------*/
    function sobreTasa(){
        if (document.getElementById('radio6').checked){
            sTasa = tasa * 0.1;
            console.log("sobre tasa ="+ sTasa.toFixed(2));
        }
        if(document.getElementById('radio7').checked){
            console.log(sTasa);
        }
    }
    /*----------------TOTAL--------------------------------------------------------------
    --(Subtotal + tasa + sobre tasa)----------------------------------------------------*/
    function total(){
        totalLiquidacion = subtotal + tasa + sTasa;
        console.log(totalLiquidacion.toFixed(2));
    }
    /*//////////////////////////////Muestra el resultado mediante el DOM////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////*/
    /*----------------------------crea el nodo------------------------------------------------*/
    function creaNodo(){
        let padre = document.getElementById("form");
        let a = document.createElement("div");
                a.innerHTML = "<table id='liquidacion'>"
                padre.appendChild(a);
    }
    /*---------------------------elimina el nodo----------------------------------------------*/
    function eliminaDos(){
        var getChild2 = document.getElementById("liquidacion");  
        getChild2.parentNode.removeChild(getChild2);
        creaNodo();
    }
    /*--------------------------imprime el resultado en pantalla------------------------------*/
    function muestraResultado(){
        eliminaDos();
        let padre = document.getElementById("liquidacion");
        let contenedor = document.createElement("div");
            contenedor.innerHTML = `    <p>Capital..................................................................$${monto}.-</p>
                                        <p>Interés compensatorio (TNA ${porcentaje}%) desde <br> 
                                        ${fechaTexto} hasta ${fechaTexto2}.................$${intereses.toFixed(2)}.-</p>
                                        <p>Interés punitorio..............................................$${intPunitorios.toFixed(2)}.-</p>
                                        <p>IVA sobre intereses..........................................$${iva.toFixed(2)}.-</p>
                                        <p class="enfasis">Subtotal........................................$${subtotal.toFixed(2)}.-</p>
                                        <p>Tasa de justicia..................................................$${tasa.toFixed(2)}.-</p>
                                        <p>Sobre Tasa..........................................................$${sTasa.toFixed(2)}.-</p>
                                        <p class="enfasis">TOTAL...........................................$${totalLiquidacion.toFixed(2)}.-</p>`;
            padre.appendChild(contenedor);
    }
    /*------------------------------ejecuta funciones-------------------------------------------*/
    creaNodo();
    intCompensatorios();
    punitorios();
    CalculaIva();
    sTotal();
    tasaJusticia();
    total();
    muestraResultado();
}