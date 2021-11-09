const productos = [
    {id:1, nombre: "Arroz", Precio: 200},
    {id:2, nombre: "Fideos", Precio:300},
    {id:3, nombre: "Pan", Precio: 150}];

for (const producto of productos){
    $("#prod").append(`<div id="caja">
                        <h4> Productos: ${producto.nombre}</h4>






                                `)
}