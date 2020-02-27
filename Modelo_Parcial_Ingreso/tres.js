function mostrar()
{

    // Ingreso las variables

    var NombrePais;
    var CantidadHabitantes;
    var TemperaturaMinima;
    var IngresoPaises;

    NombrePais = prompt ("Ingrese el nombre del pais: ");
    CantidadHabitantes = prompt ("Ingrese la cantidad de habitantes en millones: ");
    CantidadHabitantes = parseInt (CantidadHabitantes);

    while ( CantidadHabitantes < 1  ||  CantidadHabitantes > 270)
    {
        alert ("Error, el rango de habitantes tiene que ir de 1 a 270 millones");
    }

    TemperaturaMinima = prompt ("Ingrese el valor de la temperatura minima: ");
    TemperaturaMinima = parseFloat (TemperaturaMinima);

    while ( isNaN (TemperaturaMinima) ||  TemperaturaMinima < -50 || TemperaturaMinima > 50 )
    {
        alert ("Error, el rango de temperatura tiene que ir de -50 a 50")
    }

    IngresoPaises = prompt ("Quiere ingresar otro pais? ingrese si/no como respuesta: ")

    while (IngresoPaises == "si")
    {

    }



}
