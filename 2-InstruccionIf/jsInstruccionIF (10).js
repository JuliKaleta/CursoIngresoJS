function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numerorandom;

numerorandom= Math.floor(Math.random()*(11-0))

	if (numerorandom >= 9)
	{
		alert ("¡EXELENTE! su nota fue un " + numerorandom)
	}

	if (numerorandom>=4  && numerorandom<=8)
	{
		alert ("¡APROBÓ! su nota fue un " + numerorandom)
	}

	if (numerorandom <= 3)
	{
		alert ("¡VAMOS, LA PROXIMA SE PUEDE! su nota fue un " + numerorandom)
	}

}//FIN DE LA FUNCIÓN