function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value
edad = parseInt (edad);

if (edad < 13 || edad > 17)
{
alert ("La persona NO es ADOLESCENTE")
}

}//FIN DE LA FUNCIÓN