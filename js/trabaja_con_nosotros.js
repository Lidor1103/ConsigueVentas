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

//Funcionalidad de los botones
function convocatorias() {
	window.open('https://www.linkedin.com/jobs/search/?currentJobId=3658524454&f_C=68493411&geoId=92000000&originToLandingJobPostings=3658524454%2C3658609364%2C3658535145%2C3658630105%2C3658627115', '_blank');
}
function areas() {
	window.location.href = 'areas.html';
}