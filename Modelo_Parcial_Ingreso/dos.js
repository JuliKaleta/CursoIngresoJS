function mostrar()
{

var Nombre;
var Genero;
var Edad;
var Peso;
var AcumuladorEdades= 0;
var CantidadEdadesMayores25=0;
var Promedio= 0;
var respuesta;
var PersonaMenosPesada;
var PesoMinimo;
var esPrimeraIteracion = true;
var CantidadPersonas = 0;


for (var i = 0 ; i < 4 ; i++) {

    Nombre = prompt ("Ingrese el nombre")
    Genero = prompt ("ingrese el genero (femenino/masculino/otro)").toLowerCase //te lo toma en minuscula

    while (Genero != "femenino" && Genero != "masculino" && Genero != "otro") // Si no es alguno de estos valores lo vuelve a pedir
    {
        Genero = prompt("ERROR, el genero ingresado es incorrecto. El genero a ingresar debe se femenino/masculino/otro");
    }

    Edad = prompt("Ingrese la edad (entre 18 y 100):")
    Edad = parseInt(Edad)

    while ( isNaN (Edad) || edad < 18 || edad > 100)
    {
        Edad = prompt("ERROR, la edad ingresada debe estar entre 18 y 100")
        Edad = parseInt(Edad)
    }
    
    Peso = prompt("Ingrese el peso :")
    Peso = parseInt(Peso)

    while ( isNaN (Peso) || edad <= 1 )   //sirve para verificar
    {
        Edad = prompt("ERROR, el peso debe ser mayor a uno, ingrese de nuevo")
        Edad = parseInt(Edad)
    }
// PUNTO A

    if (edad >= 25)
    {
        AcumuladorEdades += edad ;
        CantidadEdadesMayores25 ++ ;
    }

// PUNTO B

    if (esPrimeraIteracion || Peso < PesoMinimo) 
    {
        PesoMinimo = peso;
        PersonaMenosPesada = nombre;    }
    
    if ( Genero != "masculino" || Peso > 80)
    {
        CantidadPersonas ++
    }
    
    esPrimeraIteracion = false   


    if (CantidadEdadesMayores25 > 0)
    {
    Promedio= AcumuladorEdades /CantidadEdadesMayores25
    respuesta += "El promedio de edaded mayores a 25 es " + Promedio 
    }

    else
    {
        respuesta += "No se ingresaron edades mayores a 25.<br>";
    }

    respuesta += PersonaMenosPesada + "es la persona menos pesada y pesa " + PesoMinimo + "Kg.<br>"
    respuesta += "la cantidad de personas d egenero distino de masculino o peso " + CantidadPersonas + "<br>"
}










}
