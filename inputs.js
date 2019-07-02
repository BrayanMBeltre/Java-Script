var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var numero3 = document.getElementById("numero3");

var boton = document.getElementById("boton");

boton.addEventListener("click", inicializar);

function inicializar() 
{
	var numero1_1 = parseInt(numero1.value);
	var numero1_2 = parseInt(numero2.value);
	var numero1_3 = parseInt(numero3.value);

	var ejercicio;

	if ((numero3.value) == "") 
	{
		ejercicio = 1;

	}else if ((numero3.value) != "") 
	{
		ejercicio = 2;
	}



	if (ejercicio == 1) 
	{
		if (numero1_1 > numero1_2) 
		{
			var suma = numero1_1 + numero1_2;
			var resta = numero1_1 - numero1_2;
			alert("Suma = " + suma);
			alert("resta = " + resta);
		}else 
		{
			var prod = numero1_2 * numero1_1;
			var div = numero1_2 / numero1_1;
			alert("Mult = " + prod);
			alert("Div = " + div); 	
		}
	}else if (ejercicio == 2) 
	{
		prom = (numero1_1 + numero1_2 + numero1_3)/3;

		if (prom > 3) 
		{
			alert("Has sido promocionado!!");
		}	

	}

	

}
