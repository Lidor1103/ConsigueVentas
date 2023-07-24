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

