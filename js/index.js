//Animaciones
AOS.init({
	duration: 1000,
});

//Preguntas frecuentes
const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {

	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;

		if (!respuesta.style.maxHeight) {
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		preguntas.forEach((elemento) => {
			if (pregunta !== elemento) {
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});
	});
});
window.addEventListener("pageshow", function (event) {
	var form = document.getElementsByTagName("form")[0];
	if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
		form.reset();
	}
});



//Portafolio seleccionado
const proyectos = document.getElementsByClassName("po_hover");
const imagencambiante = document.getElementById("imagencambiante");
for (let i = 0; i < proyectos.length; i++) {
	proyectos[i].addEventListener("click", function () {
		// Obtener el nombre del proyecto
		const proyecto = this.id;

		// Redirigir a la página "OhMeVengo.html" pasando el nombre del proyecto como parámetro
		window.location.href = `verproyecto.html?project=${proyecto}`;
	});
}



// LLenar el formulario según el botón del servicio
function mostrarMensajeError(mensaje) {
	var mensajeError = document.createElement('div');
	mensajeError.innerText = mensaje;
	mensajeError.style.color = 'red';
	mensajeError.style.textAlign = 'center';
	mensajeError.style.padding = '10px';
	mensajeError.style.backgroundColor = '#f2dede';
	mensajeError.style.position = 'fixed';
	mensajeError.style.top = '0';
	mensajeError.style.width = '100%';
	document.body.insertBefore(mensajeError, document.body.firstChild);
}

function validarFormulario() {
	// Obtener los valores de los campos
	var nombres = document.getElementById('Nombres').value;
	var celular = document.getElementById('Celular').value;
	var correo = document.getElementById('Correo electrónico').value;
	var ciudad = document.getElementById('ciudad').value;
	var asunto = document.getElementById('Asunto').value;

	// Verificar si los campos están vacíos
	if (nombres === '' || celular === '' || correo === '' || ciudad === '' || asunto === '') {
		// Mostrar mensaje de "Faltan datos" en la parte superior de la página
		mostrarMensajeError('Faltan datos');

		// Evitar que el formulario se envíe
		return false;
	}
	
	// Si todos los campos están llenos, el formulario se enviará normalmente
	return true;
}