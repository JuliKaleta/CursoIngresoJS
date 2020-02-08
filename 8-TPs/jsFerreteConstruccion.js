/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;
    var area;

    largo = document.getElementById("Largo").value 
    largo = parseFloat(largo);

    ancho = document.getElementById("Ancho").value 
    ancho = parseFloat(ancho);

    area = ((ancho * largo)*3);

    alert("La cantidad de alambre a utilizar es: " + area)

}
function Circulo () 
{
    var radio;
    var area2;

    pi= 3.14;

    radio = document.getElementById("Radio").value
    radio = parseFloat(radio);

    area2 = ((pi * (radio*radio))*3)

    alert("La cantidad de alambre a utilizar es: " + area2)
}
function Materiales () 
{
	var ancho;
    var largo;
    var cal;
    var cemento;
    var contrapiso;

    largo = document.getElementById("Largo").value 
    largo = parseFloat(largo);

    ancho = document.getElementById("Ancho").value 
    ancho = parseFloat(ancho);

    contrapiso = (ancho * largo)
 
    cemento = (((contrapiso)*2)/1)
    
    cal = (((contrapiso)*3)/1)

    alert("Las cantidades de bolsas a utilizar son : " + cal + " de cal y " + cemento + " de cemento.")
}