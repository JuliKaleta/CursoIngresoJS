function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

	while (isNaN (numero) || numero > 10 || numero < 0)
	{
		numero = prompt ("Reingrese un numero");
		numero = parseInt (numero);
	}

	document.getElementById("Numero").value = numero;
	
	// isNaN: pregunta si lo que esta dentro es un numero o no

}//FIN DE LA FUNCIÓN