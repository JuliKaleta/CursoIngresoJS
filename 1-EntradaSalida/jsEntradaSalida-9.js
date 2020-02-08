/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var aumento;
    var aumentofinal;
    
 
    importe = document.getElementById("sueldo").value
    importe = parseInt(importe);
    
    aumento = (( 10 * importe )/100);
    aumentofinal= (aumento + importe);
    
    document.getElementById("resultado").value = aumentofinal
	
}
