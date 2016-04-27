// Escribe aquí tu codigo Javascript
var n = parseInt(prompt("Ingrese una numero entero: "));
var factorial =1;
var cadena ="";
n;
if (n>0){
	for(var c=1; c<=n;c++){
		factorial = factorial * c;
		cadena += c + " x "
	}
	alert(cadena + " = " + factorial);
}else{
	alert("vuelve a probar");
}



