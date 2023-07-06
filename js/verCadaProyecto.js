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
		imagencambiante.src = 'img/pro_mahal.png';
		break;
	case 'proyecto2':
		imagencambiante.src = 'img/pro_jf.png';
		break;
	case 'proyecto3':
		imagencambiante.src = 'portafolio/Psicocenter.pdf';
		break;
	case 'proyecto4':
		imagencambiante.src = 'portafolio/sergenind.pdf';
		break;
	case 'proyecto5':
		imagencambiante.src = 'img/pro_impactoverde.png';
		break;
	case 'proyecto6':
		imagencambiante.src = 'img/pro_allan.png';
		break;
	default:
		// Acciones por defecto si el proyecto no coincide con ninguno de los casos anteriores
		break;
}
