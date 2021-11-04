const productos = [{id: 1, nombre: "arroz", precio: 100},
{id: 2, nombre: "fideo", precio: 70},
{id: 3, nombre: "pan", precio: 50},
{id: 4, nombre: "flan", precio: 120}];

for (const producto of productos){
    $("#prueba").append(`<div id="caja"><h3> id: ${producto.id}</h3>
    <p> producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b></div>`);
}