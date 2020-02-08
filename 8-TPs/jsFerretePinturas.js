/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var Fahrenheit;
    var Centígrados;

    Fahrenheit = document.getElementById("Temperatura").value
    Fahrenheit = parseFloat(Fahrenheit);

    Centígrados = (((Fahrenheit - 32)/1.8))

    alert( Fahrenheit + " Fahrenheit son " + Centígrados + " Centígrados")

}

function CentigradosFahrenheit () 
{
	var temperatura;
    var Fahrenheit;
    var Centígrados;

    Centígrados = document.getElementById("Temperatura").value
    Centígrados = parseFloat(Centígrados);

    Fahrenheit = (( (9/5) * Centígrados ) + 32)

    alert( Centígrados + " Centígrados son " + Fahrenheit + " Fahrenheit")

}
