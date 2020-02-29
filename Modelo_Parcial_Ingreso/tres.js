function mostrar()
{

    var NombrePais;
    var ContadorPaises = 0;
    var PaisConMasHabitantes;
    var CantidadHabitantes;
    var MaximaCantidadHabitantes;
    var TemperaturaMinima;
    var TemperaturaMinimaContador = 0;
    var CantidadTemperaturaMinima =0;
    var SeguirIngresoPaises;
  
        
    for ( var i = 0 ; i != "si" ; i++ )
    {

    NombrePais = prompt ("Ingrese el nombre del pais: ");

    CantidadHabitantes = prompt ("Ingrese la cantidad de habitantes en millones: ");
    CantidadHabitantes = parseInt (CantidadHabitantes);

        while (isNaN (CantidadHabitantes) || CantidadHabitantes < 1  ||  CantidadHabitantes > 270)
        {
            CantidadHabitantes = prompt ("Error, el rango de habitantes tiene que ir de 1 a 270 millones, vuelva a ingresar");
            CantidadHabitantes = parseInt (CantidadHabitantes);
        }

    TemperaturaMinima = prompt ("Ingrese el valor de la temperatura minima: ");
    TemperaturaMinima = parseFloat (TemperaturaMinima);

        while ( isNaN (TemperaturaMinima) ||  TemperaturaMinima < -50 || TemperaturaMinima > 50 )
        {
            TemperaturaMinima = prompt ("Error, el rango de temperatura tiene que ir de -50 a 50");
            TemperaturaMinima = parseFloat (TemperaturaMinima);
        }

    SeguirIngresoPaises = prompt ("Quiere ingresar otro pais? ingrese si/no como respuesta: ")



        

    if ( TemperaturaMinima != 1)
    {
        TemperaturaMinimaContador += TemperaturaMinima
        CantidadTemperaturaMinima ++

    }

    if ( MaximaCantidadHabitantes =6 )
    {
        MaximaCantidadHabitantes = CantidadHabitantes
        PaisConMasHabitantes = NombrePais
    }

    }

}
