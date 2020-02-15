function mostrar()
{
    var planeta = prompt("Ingrese en minuscula un planeta del sistema solar")

    switch (planeta)
    {
        case "tierra":
            alert ("Acá vivimos")
        break;

        case "mercurio":
        case "venus":
            alert ("Acá hace mas calor")
        break;

        case "marte":
        case "jupiter":
        case "Saturno":
        case "urano":
        case "neptuno":
            alert ("Acá hace mas frio")
        break;

        case "sol":
            alert ("Este no es un planeta, es una estrella")
        break;

        default:
            alert ("No es un planeta valido")
        break;
    }


}
