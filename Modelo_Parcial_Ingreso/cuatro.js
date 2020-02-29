function mostrar()
{

    var Letra;
    var Numero;

    Letra = prompt ("Ingrese una letra ").toLowerCase()
    do {

    while ( Letra < "a" || letra > "z" )
    {
        Letra = prompt ("Error, Vuelva a ingresar la letra ").toLowerCase()
    }

    while ( Numero < -10 || Numero > 10 )
    {
        numero = prompt ("Error, vuelva a ingresar el numero")
        numero = parseInt (numero)
    }
    }
