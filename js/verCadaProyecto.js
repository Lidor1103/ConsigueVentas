AOS.init({
	duration: 1000,
});



// Obtén el valor del parámetro "project" de la URL
const urlParams = new URLSearchParams(window.location.search);
const proyecto = urlParams.get('project');

// Obtiene el elemento "embed" por su id
const imagencambiante = document.getElementById("imagencambiante");

// Cambia el src del elemento "embed" según el proyecto seleccionado
switch (proyecto) {
	case 'proyecto1':
		imagencambiante.src = 'img/pro_mahal.webp';
		break;
	case 'proyecto2':
		imagencambiante.src = 'img/pro_jf.webp';
		break;
	case 'proyecto3':
		imagencambiante.src = 'img/pro_psicocenters.webp';
		break;
	case 'proyecto4':
		imagencambiante.src = 'img/pro_sergenind.webp';
		break;
	case 'proyecto5':
		imagencambiante.src = 'img/pro_impactoverde.webp';
		break;
	case 'proyecto6':
		imagencambiante.src = 'img/pro_allan.webp';
		break;
	default:
		// Acciones por defecto si el proyecto no coincide con ninguno de los casos anteriores
		break;
}
