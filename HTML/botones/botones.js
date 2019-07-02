

//Canvas
var dibujo = document.getElementById("dibujo");
var lienzo = dibujo.getContext("2d");

//textbox para el numero de lineas
var texto_lineas = document.getElementById("texto_lineas")

//boton para el numero de lineas
var boton_lineas = document.getElementById("boton_lineas");

//cuando se hace click
boton_lineas.addEventListener("click", dibujo_por_click);

/////////////////////////////////////////////////////////////////
function linea (color, x_inicial, y_inicial, x_final, y_final) {

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(x_inicial, y_inicial); 
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath();

}
//////////////////////////////
//cuadrado
linea("black", 0,0,300,0);
linea("black", 0,0,0,300);
linea("black", 0,300,300,300);
linea("black", 300,300,300,0);
////////////////////////////////

var ancho = dibujo.width;



function dibujo_por_click()
{

	var lineas = parseInt(texto_lineas.value);

	for (var i = 0; i < lineas; i++) 
	{

		linea("red", 0, i*(ancho/lineas), (i+1)*(ancho/lineas), 300)
		
	}

}

