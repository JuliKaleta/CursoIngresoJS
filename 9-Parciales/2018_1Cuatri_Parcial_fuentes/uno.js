
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    var ancho = prompt("Ingrese el ancho del rectangulo");
    ancho = parseFloat(ancho);

    var largo = prompt("Ingrese el largo del rectangulo");
    largo = parseFloat(largo);

    perimetro = ((ancho*largo)*2)

    alert ("El perimetro de su rectangulo de " + ancho + " de ancho y " + largo + " de largo, es " + perimetro)


    

}
