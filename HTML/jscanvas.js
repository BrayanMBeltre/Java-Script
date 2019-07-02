document.write("Dibujo");

var dibujo = document.getElementById("dibujo");
var lienzo = dibujo.getContext("2d");

var dibujo2 = document.getElementById("dibujo2");
var lienzo2 = dibujo2.getContext("2d");

var dibujo3 = document.getElementById("dibujo3");
var lienzo3 = dibujo3.getContext("2d");
//console.log(lienzo);

// lienzo.beginPath();
// lienzo.strokeStyle = "red";
// lienzo.moveTo(100, 100);
// lienzo.lineTo(200,200);
// lienzo.stroke();
// lienzo.closePath();

function linea ( color, x_inicial, y_inicial , x_final, y_final)
 {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();

}

function punto ( color, x, y)
 {
	
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x, y);
	lienzo.lineTo(x+1, y+1);
	lienzo.stroke();
	lienzo.closePath();

}


// linea("red", 0, 300, 300, 0);
linea("red", (300)/2, 0, 300/2, 300);
linea("red", 0,(300)/2, 300, 300/2);

linea("red", 0,0,300,0);
linea("red", 0,0,0,300);
linea("red", 300, 0, 300, 300);
linea("red", 0,300,300,300);

for (var i = 0; i < 100; i++) {

	punto("black", 300/(i*10), i*10)
}

///////////////////////////////////////////////

function linea2 ( color, x_inicial, y_inicial , x_final, y_final)
 {
	lienzo2.beginPath();
	lienzo2.strokeStyle = color;
	lienzo2.moveTo(x_inicial, y_inicial);
	lienzo2.lineTo(x_final, y_final);
	lienzo2.stroke();
	lienzo2.closePath();

}

function linea3 ( color, x_inicial, y_inicial , x_final, y_final)
 {
	lienzo3.beginPath();
	lienzo3.strokeStyle = color;
	lienzo3.moveTo(x_inicial, y_inicial);
	lienzo3.lineTo(x_final, y_final);
	lienzo3.stroke();
	lienzo3.closePath();

}

linea2("red", 0,0,300,0);
linea2("red", 0,0,0,300);
linea2("red", 300, 0, 300, 300);
linea2("red", 0,300,300,300);



for (var i = 0; i < 50; i++) 
{
	// blue = xi = 0        && yi = i * 10 
	// blue = xf = (i+1)*10 && yf = 300

	// red = xi = 300      && yi = i * 10
	// red = xf = (i+1)/10 && yf = 300
	linea2("blue", 0, i * 10, (i+1) * 10, 300);
	linea2("red", 300, i * 10, 300 - (i*10), 300);
}

linea3("red", 0,0,300,0);
linea3("red", 0,0,0,300);
linea3("red", 300, 0, 300, 300);
linea3("red", 0,300,300,300);



