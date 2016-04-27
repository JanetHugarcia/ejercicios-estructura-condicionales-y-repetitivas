// Escribe aquí tu codigo Javascript
var num1 = parseFloat(prompt("Ingrese primer numero: "));
var num2 = parseFloat(prompt("Ingrese segundo numero: "));
var resto = null;
var suma = null;
var division = null;
var multiplicacion = null;

if ( num1 > num2 ){
	suma = num1 + num2;
	resto = num1 - num2;
	alert("la suma y resta es: " + suma + " y " + resto + " respectivamente")
}else if(num1 === num2){
	alert("Los numeros son iguales");
}else{
	multiplicacion = num1 * num2;
	division = num1/num2;
	alert("La multiplicacion y division es: "+ multiplicacion + " y " + division + " respectivamente")
}



