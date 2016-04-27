// Escribe aquí tu codigo Javascript
var n = parseInt(prompt("Ingrese numero de cuenta: "));

if(n>0){
	var nombre = prompt("Ingrese su nombre:");
	var saldo = parseInt(prompt("Ingrese saldo: "));

	if(saldo>0){
		alert("Ud. es acreedor");
		n;
	}else if( saldo === 0){
		alert("Saldo nulo");
		n;
	}else{
		alert("Ud. es deudor");
		n;
	}

}else {
	alert("Numero de cuenta invalido");
}






