$("#btnNocturno").click(function (){
    nocturno();
    $("#btnDiurno").show();
   
});
function nocturno(){
    $(".header").css({"background-color": "rgb(16, 22, 56)"})
    $(".footer").css({"background-color": "rgb(16, 22, 56)"})
    $(".contenido").css({ "background": "none",
     "background-color": "black"});
     $("#btnNocturno").hide();
     $("#btnDiurno").css({"background-color": "yellow", "color": "black", "font-weight": "800", "padding": "5px 10px"})    
}
$("#btnDiurno").click(function (){
    diurno();
    $("#btnNocturno").show();
   
});


function diurno(){
    $(".header").css({"background-color": "rgb(43, 70, 226)"})
    $(".footer").css({"background-color": "rgb(43, 70, 226)"})
    $(".contenido").css({ "background": "linear-gradient(352deg, rgb(241, 241, 241) 0%, rgba(158,187,207,1) 39%, rgb(161, 235, 235) 100%)",
     "background-color": "none",});
    $("#btnDiurno").hide();
    $("#btnNocturno").css({"background-color": "blue", "color": "rgb(177, 252, 239)", "font-weight": "800", "padding": "5px 10px"})
    
}


