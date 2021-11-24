/*//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////PAGINA DE PRESENTACIÓN//////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */

/*////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Página de presentacion//////////////////////////////////////////*/
/*----------------------------aplica estilo a la página-------------------------------------*/
$("body").append(`<div class="caja__presentacion"><button id="btnEntrar">Entrar</button></div>`);
$(".container").css({"display": "none"});
$(".caja__presentacionDos").css({"display": "none"});
$(".caja__presentacion").css({"background-image": "url(./assets/portadafondo.JPG)", 
"width": "100vw", "height": "100vh", "display": "flex", "justify-content": "center",
"animation-name": "aparece", "animation-duration": "2s", "align-items": "flex-end", 
"background-size": "cover", "padding": "120px"});
$("#btnEntrar").css({"background": "rgb(4, 108, 226)", 
"width": "100px", "height": "60px", "border-radius": "30%", "font-weight": "800",
"font-size":"1.5em", "color": "white"})
.hide()
.delay(1000)
.fadeIn(500);
/*----------------otorga fncionamiento al boton Entrar--------------------------------*/
$("#btnEntrar").click(function (){
    $(".caja__presentacionDos").slideDown("1500");
    $(".caja__presentacion").slideUp("1500");
});
/*////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Menu interactivo//////////////////////////////////////////*/
/*---------------crea los botones----------------------*/
$("body").append(`<div class="caja__presentacionDos">
    <section>
        <a class="menuInteractivo" href="liquidacion.html">
            <div class="foto__menu"></div>
            <p class="textoMenu">Liquidaciones</p>
        </a>
        <a class="menuInteractivo" href="datos.html">
            <div class="foto__menu foto__menu--dos"></div>
            <p class="textoMenu">Seguimiento <br>de casos</p>
        </a>
    </section>
    </div>`);
/*---------------aplica estilo a los botones---------------------*/
$(".caja__presentacionDos").css({"background": "linear-gradient(295deg, rgba(0,11,221,1) 0%, rgba(56,157,175,1) 49%, rgba(16,97,255,1) 100%)", 
"width": "100vw", "height": "100vh", "animation-name": "aparece", "animation-duration": "2s",
"padding-top": "150px"});
$(".caja__presentacionDos section").css({"width": "90%", 
"margin": "auto", "display": "flex", "justify-content": "center"});
$(".caja__presentacionDos a").css({"background-color": "white", "box-shadow": "-1px 1px 63px -7px rgba(255,251,54,0.75)",
"border-radius": "50%", "width": "300px", "heigth": "300px", "margin":"10px 50px"});
$(".foto__menu").css({"background-image": "url(./assets/calculadora.png)", 
"width": "200px", "height": "200px", "display": "flex", "background-size": "cover", "margin": "auto"});
$(".foto__menu--dos").css({"background-image": "url(./assets/base.png)"});
$(".textoMenu").css({"color": "rgb(5, 106, 221)", "font-weight": "800", "font-size": "1.5em"}); 
$(".menuInteractivo").css({"text-decoration": "none", "text-align": "center"});


