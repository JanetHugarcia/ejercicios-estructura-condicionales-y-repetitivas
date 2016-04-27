// Escribe aquí tu codigo Javascript

var lado1 =parseInt(prompt("Ingrese lado mayor:"));
var lado2 =parseInt(prompt("Ingrese segundo lado:"));
var lado3 =parseInt(prompt("Ingrese tercer lado:"));


if(lado1===lado2 && lado1===lado3){
	alert("El triangulo es equilátero");
}else if(lado1 === lado2 || lado1=== lado3 || lado2 ===lado3){
	alert("El triangulo es isosceles");
}else if(lado1!=lado2 && lado2!=lado3 && lado1!=lado3){
    alert('Es un triangulo escaleno');
    if(lado1*lado1===lado2*lado2+lado3*lado3 || lado2*lado2===lado1*lado1+lado3*lado3 || lado3*lado3===lado1*lado1+lado2*lado2){
        alert('Es un triangulo rectangulo');
    }
}


