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
function llenarCamposFormulario(asunto, consulta) {
	document.getElementById('Asunto').value = asunto;
	document.getElementById('consulta').value = consulta;

	const formularioOffsetTop = document.getElementById('contenedor_formulario').offsetTop;
	window.scrollTo({
		top: formularioOffsetTop,
		behavior: 'smooth'
	});

	document.getElementById('Asunto').classList.add('input-lleno');
	document.getElementById('consulta').classList.add('input-lleno');

	setTimeout(function () {
		document.getElementById('Asunto').classList.remove('input-lleno');
		document.getElementById('consulta').classList.remove('input-lleno');
	}, 3000);
}

document.getElementById("botonembudo").addEventListener('click', function () {
	const asunto = "Embudo de Ventas";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});

document.getElementById("botonpagina").addEventListener('click', function () {
	const asunto = "Páginas Web";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});

document.getElementById("botoncatalogo").addEventListener('click', function () {
	const asunto = "Catálogo Virtual";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
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