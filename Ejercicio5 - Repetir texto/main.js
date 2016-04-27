// Escribe aquí tu codigo Javascript



do{
	var string=prompt("Stoppealo con un numero negativo\nIngrese texto:");
	var n = parseInt(prompt("Ingrese numero de veces a repetir:"));
	if(n>0){
		for(var c=1 ; c<=n;c++){
			document.write( string + " ");
		}
	}else{
		alert("Invalido");
		break;
	}
	
}while(n=!0)





