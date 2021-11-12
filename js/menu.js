/*-------------------menu interactivo----------------------------------*/
$("body").prepend(`<div class="caja__presentacionDos">
    <section>
        <a class="menuInteractivo" href="liquidacion.html">
            <div class="foto__menu"></div>
        </a>
        <a class="menuInteractivo" href="datos.html">
        <div class="foto__menuDos"></div>
        </a>
    </section>
    </div>`);

$(".caja__presentacionDos").css({"background": "linear-gradient(295deg, rgba(205,0,0,1) 0%, rgba(191,57,57,1) 49%, rgba(134,10,34,1) 100%)", 
"width": "100vw", "height": "100vh", "animation-name": "aparece", "animation-duration": "2s",
"padding-top": "200px"});
$(".caja__presentacionDos section").css({"width": "90%", 
"margin": "auto", "display": "flex", "justify-content": "center"});
$(".caja__presentacionDos a").css({"background-color": "white", "box-shadow": "-1px 1px 63px -7px rgba(255,251,54,0.75)",
 "margin": "10px 50px", "border-radius": "50%"});
$(".foto__menu").css({"background-image": "url(./assets/calculadora.png)", 
"width": "300px", "height": "300px", "background-size": "cover", "display": "inline-block"});
$(".foto__menuDos").css({"background-image": "url(./assets/base.png)", 
"width": "300px", "height": "300px", "background-size": "cover", "display": "inline-block"});

$(".menuInteractivo").click(function (){
    $(".container").show("slow");
    $(".caja__presentacion").hide();
    $(".caja__presentacionDos").slideUp("slow");
});



/*-----------pagina bienvenida-----------------------------------------*/

$("body").prepend(`<div class="caja__presentacion">
                    <h3> Bienvenido al Sistema de Liquidaciones online </h3>
                    <div id="izquierda">
                        <p class="textoUno">Facil <br>de usar</p><br>
                        <p class="textoDos">intuitivo</p>
                        
                    </div>
                    <div id="centro"><img src="./assets/liquidaciones.png"></div>
                    <div id="derecha">
                        <p class="texTres">Accesible</p><br>
                        <p class="textoCuatro">interfaz<br> amigable</p>
                    </div>
                    
</div>`);




$(".container").css({"display": "none"});
$(".caja__presentacionDos").css({"display": "none"});
$("#centro").css({"width": "auto"});
$("#izquierda").css({"width": "28%", "height": "500px", "display": "flex", "flex-direction": "column", "justify-content": "space-evenly", 
"align-items": "center"
});
$("#derecha").css({"width": "28%", "height": "500px", "display": "flex", "flex-direction": "column", "justify-content": "space-evenly",
"align-items": "center"
});

$(".caja__presentacion").css({"background": "linear-gradient(295deg, rgba(205,0,0,1) 0%, rgba(191,57,57,1) 49%, rgba(134,10,34,1) 100%)", 
"width": "100vw", "height": "100vh", "display": "flex", "justify-content": "center",
"flex-wrap": "wrap", "animation-name": "aparece", "animation-duration": "2s"
});
$("#centro img").css({"border-radius": "50%", "margin": "auto", "box-shadow": "-1px 1px 63px -7px rgba(255,251,54,0.75)",
"width": "350px", "height": "350px", "animation-name": "aparece", 
"cursor": "pointer", "animation-duration": "2s"});
$(".caja__presentacion h3").css({"color": "white", "font-weigth": "900", "text-align": "center",
"width": "100%", "font-size": "2.5em", "margin-top": "50px"})

$(".caja__presentacion img").click(function (){
    $(".caja__presentacionDos").slideDown("1500");
    $(".caja__presentacion").slideUp("1500");
});