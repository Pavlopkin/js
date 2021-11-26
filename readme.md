#Liquidaciones online - 

_Proyecto final (curso Javascript Coder House) _

## Estructura del proyecto 

_Secciones: _

* index.html
* Liquidaciones
* Datos

### Index.html
_Página Principal que sirve como introducción y enlace a las restantes secciones._

### liquidaciones.html
_Permite al usuario realizar el cálculo de una liquidación judicial completa o solo la Tasa de Justicia. Comprende los siguientes rubros:._

_ 1) Interés compensatorio: se obtiene a partir del siguiente cálculo: Monto * dias * porcentaje (todas variables ingresadas por el usuario) _

_2) Intereses punitorios: Intereses * 0.5 (opcional)._ 

_3) IVA sobre intereses: (Interés compensatorio + Intereses punitorios) * 0.21. (opcional) _ 

_4) Subtotal: Monto + Interés compensatorio + Intereses punitorios + IVA. (opcional) _

_5) Tasa de Justicia: Variable 3% o 2;2%. (opcional) _

_6) Sobre Tasa de Justicia: solo en caso de Tasa 2,2% (opcional) _

_7) Total: Monto + Interés compensatorio + Intereses punitorios + IVA + Tasa de Justicia + Sobre Tasa de Justicia _

### Datos
_ Planilla de seguimiento de casos: Muestra en pantalla los rubros ID, Gestor, Contribuyente, Estado y Observaciones.

Permite realizar las siguientes operaciones: _

_ 1) Ordenar por Gestor, Nombre, Estado, ID _

_2) Modificar: Busca casos por Nombre y modifica su estado y observacion._ 

_3) Agregar: Agrega un nuevo caso, se asigna un ID y permite agregar el contenido de los restantes rubros._

La tabla toma sus datos de la siguiente Api: https://rickandmortyapi.com/api/character

###Un vistazo al código utilizado:
####Javascript code

```function calculaLiquidacion(valoresIngresados){ 
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
```
## Herramientas utilizadas 

_Para el desarrollo de esta proyecto se utilizaron los siguientes lenguajes:_
* HTML 5,
* Javascript
* JQuery
*	SCSS
* CSS,
* boostrap 5 (https://getbootstrap.com) ,

## Autor ✒️

_Este sitio fue creado a los fines de ser presentado como proyecto finan el Coderhouse.com por:_

* **Pablo Rodrigo Gomez** - *Diseño y contenido* - [pavlopkin](https://github.com/pavlopkin)


###End