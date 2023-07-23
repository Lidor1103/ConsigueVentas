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

const urlPDFs = {
	proyecto1: 'portafolio/mahal.pdf',
	proyecto2: 'portafolio/jf.pdf',
	proyecto3: 'portafolio/psicocenters.pdf',
	proyecto4: 'portafolio/Sergenind.pdf',
	proyecto5: 'portafolio/ImpactoVerde.pdf',
	proyecto6: 'portafolio/AllanEmmanuel.pdf',
};

const botonDescarga = document.querySelector('#pdf_descarga');

botonDescarga.addEventListener('click', function () {
	if (proyecto in urlPDFs) {
		const urlPDF = urlPDFs[proyecto];
		botonDescarga.href = urlPDF;
	} else {
		// Acciones por defecto si el proyecto no coincide con ninguno de los casos anteriores
	}
});

//FORMULARIO solo cuando los campos estén llenos
function validarFormulario() {
	// Obtener los valores de los campos
	var nombres = document.getElementById('Nombres').value;
	var celular = document.getElementById('Celular').value;
	var correo = document.getElementById('Correo electrónico').value;
	var ciudad = document.getElementById('ciudad').value;
	var asunto = document.getElementById('Asunto').value;

	// Verificar si los campos están vacíos
	if (nombres === '' || celular === '' || correo === '' || ciudad === '' || asunto === '') {
		// Mostrar mensaje de alerta "Faltan datos"
		alert('Faltan datos, por favor complete todos los campos antes de enviar el formulario.');

		// Evitar que el formulario se envíe
		return false;
	}
	
	// Si todos los campos están llenos, el formulario se enviará normalmente
	return true;
}