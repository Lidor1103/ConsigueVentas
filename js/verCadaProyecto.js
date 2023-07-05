AOS.init({
	duration: 1000,
});
// Obtén el valor del parámetro "project" de la URL
const urlParams = new URLSearchParams(window.location.search);
const proyecto = urlParams.get('project');

// Obtiene el elemento "embed" por su id
const pdfEmbed = document.getElementById('pdfEmbed');

// Cambia el src del elemento "embed" según el proyecto seleccionado
switch (proyecto) {
	case 'proyecto1':
		pdfEmbed.src = 'portafolio/mahal.pdf';
		break;
	case 'proyecto2':
		pdfEmbed.src = 'portafolio/jf.pdf';
		break;
	case 'proyecto3':
		pdfEmbed.src = 'portafolio/Psicocenter.pdf';
		break;
	case 'proyecto4':
		pdfEmbed.src = 'portafolio/sergenind.pdf';
		break;
	case 'proyecto5':
		pdfEmbed.src = 'portafolio/ImpactoVerde.pdf';
		break;
	case 'proyecto6':
		pdfEmbed.src = 'portafolio/Allan_E.pdf';
		break;
	default:
		// Acciones por defecto si el proyecto no coincide con ninguno de los casos anteriores
		break;
}