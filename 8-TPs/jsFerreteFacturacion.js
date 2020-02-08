/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma

    precio1 = document.getElementById("PrecioUno").value
    precio1 = parseInt(precio1);

    precio2 = document.getElementById("PrecioDos").value
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("PrecioTres").value
    precio3 = parseInt(precio3);

    suma = (precio1 + precio2 + precio3);

    alert ("La suma de sus tres productos es " + suma);
    
    
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = document.getElementById("PrecioUno").value
    precio1 = parseInt(precio1);

    precio2 = document.getElementById("PrecioDos").value
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("PrecioTres").value
    precio3 = parseInt(precio3);

    promedio = ((precio1 + precio2 + precio3)/3);

    alert ("El promedio de sus tres productos es " + promedio);
    
	
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var precioIva;
    var precioIvaFinal;

    precio1 = document.getElementById("PrecioUno").value
    precio1 = parseInt(precio1);

    precio2 = document.getElementById("PrecioDos").value
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("PrecioTres").value
    precio3 = parseInt(precio3);

    precioIva = (((precio1 + precio2 + precio3)*21)/100);
    precioIvaFinal= ((precio1 + precio2 + precio3)+ precioIva);

    alert ("El valor final de los productos es " + precioIvaFinal);
    
}