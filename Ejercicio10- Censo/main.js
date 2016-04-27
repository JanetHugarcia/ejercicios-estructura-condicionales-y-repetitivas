// Escribe aquí tu codigo Javascript

var c=0;
var mujer=0;
var varon=0;
var i=0;
do{
	var n=prompt("Presiona 0 para salir \nIngresar numero de documento");
	if (n>0){
		var nombre=prompt("Ingresar nombre:");
		var edad = parseInt(prompt("Ingresar edad:"));
		var sexo = prompt("Ingresar sexo(f/m):").toLowerCase();
		c+=1;
		switch(sexo){
			case 'f':
				mujer+=1;
				break;
			case 'm':
				varon+=1;
				if (edad>=16 && edad<=65){
					i+=1;
				}
				break;
			default:
				break;
		}
	}else{
		break;
	}
}while(n=!null)

alert("Numero de personas: " + c + 
	"\nNumero de mujeres: " + mujer +
	"\nNumero de hombres: " + varon +
	"\nVarones entre 16 y 65: " + i );
