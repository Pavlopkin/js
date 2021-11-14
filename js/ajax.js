const URLGET = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12"

$("#ajax").prepend('<button id="btn1">GET</button>');

$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
        if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("#ajax").prepend(`<div id="per">
                    <h1>Character</h1>
                    <p>Name ${dato.name}</p>
                    <p>Status ${dato.status}</p>
                    <p>Specie ${dato.species}</p>
                    <img src="${dato.image}"></div>`);
            }  
        }
    });
    $("#btn1").hide();
});


