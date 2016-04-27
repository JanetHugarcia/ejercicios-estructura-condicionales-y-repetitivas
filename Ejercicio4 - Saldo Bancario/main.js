// Escribe aquí tu codigo Javascript
do{
	var n = parseInt(prompt("Ingrese numero de cuenta: "));
	if(n>0){
		var nombre = prompt("Ingrese su nombre:");
		var saldo = parseInt(prompt("Ingrese saldo: "));

		if(saldo>0){
			total = total +saldo;
			alert("Ud. es acreedor\nsaldo total: " + total );
		}else if( saldo === 0){
			alert("Saldo nulo");
		}else{
			alert("Ud. es deudor");
		}

	}else {
		alert("Numero de cuenta invalido");
	}

}while(n>0);




