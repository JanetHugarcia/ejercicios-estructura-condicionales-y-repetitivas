// Escribe aquí tu codigo Javascript
var palabra=prompt('Ingrese palabra');
var p=palabra.toLowerCase();

switch (p) {
    case 'casa':
        alert('House');
        break;
    case 'mesa':
        alert('Table');
        break;
    case 'perro':
        alert('Dog');
        break;
    case 'gato':
        alert('Cat');
        break;
    default:
    	alert("Not found");
    	break;
}

