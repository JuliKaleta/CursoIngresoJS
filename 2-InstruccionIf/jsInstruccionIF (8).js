function mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;

edad = document.getElementById("edad").value
edad = parseInt (edad);

estadoCivil= document.getElementById("estadocivil").value;

if (edad >= 18 && estadoCivil == "soltero")
{
    alert ("No es menor y es soltero");
}


}//FIN DE LA FUNCIÓN