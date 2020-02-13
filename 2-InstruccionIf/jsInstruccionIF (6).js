function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value
edad = parseInt (edad);

if (edad>=13 && edad<=17)
{
alert ("La persona es ADOLESCENTE")
}

if(edad>17)
{
alert ("La persona es MAYOR DE EDAD")
}

if(edad<13)
{
alert ("La persona es MENOR DE EDAD")
}


}//FIN DE LA FUNCIÓN