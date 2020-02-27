
function mostrar()
{
    var LadoUno;
    var LadoDos;
    var AnguloRecto;
    var Superficie;
    var Perimetro;
    var Multiplicacion;
    var Suma;

    LadoUno = document.getElementById("ladoA").value;
    LadoUno = parseFloat (LadoUno);
    LadoDos = document.getElementById("ladoB").value;
    LadoDos = parseFloat (LadoDos);
    AnguloRecto = document.getElementById("angulosRectos").value;

        if (LadoUno != LadoDos && AnguloRecto == "SI")
        {
            Superficie = LadoUno * LadoDos;

            alert ("Lados concatenados: " + LadoUno + LadoDos + ". Y la superficie es: " + Superficie)
        }

        if (LadoUno != LadoDos && AnguloRecto == "NO")
        {
            Perimetro = ((2*LadoUno) + (2*LadoDos))

            alert ("Lados concatenados: " + LadoUno + LadoDos + ". Y el perimetro es: " + Perimetro)
        }

        if (LadoUno == LadoDos && AnguloRecto == "SI")
        {
            Multiplicacion = LadoUno * LadoDos;

            alert ("Lados concatenados: " + LadoUno + LadoDos + ". Y la multiplicación de sus lados es: " + Multiplicacion)
        }

        if (LadoUno == LadoDos && AnguloRecto == "NO")
        {
            Suma = LadoUno + LadoDos;

            alert ("Lados concatenados: " + LadoUno + LadoDos + ". Y la suma de sus lados es: " + Suma)
        }

}
