AOS.init({
	duration: 1000,
});

const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		preguntas.forEach((elemento) => {
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});
	});
});
window.addEventListener("pageshow", function (event) {
	var form = document.getElementsByTagName("form")[0];
	if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
		// Limpia los campos del formulario al regresar a la página
		form.reset();
	}
});



// Obtenemos todos los elementos con la clase "proyecto"
const proyectos = document.getElementsByClassName("po_hover");
const pdfEmbed = document.getElementById("pdfEmbed");


// Agregamos un evento de clic a cada elemento
for (let i = 0; i < proyectos.length; i++) {
  proyectos[i].addEventListener("click", function() {
    // Obtener el nombre del proyecto
    const proyecto = this.id;

    // Redirigir a la página "OhMeVengo.html" pasando el nombre del proyecto como parámetro
    window.location.href = `verproyecto.html?project=${proyecto}`;
  });
}

