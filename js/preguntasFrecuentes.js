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


// Agregamos un evento de clic a cada elemento
for (let i = 0; i < proyectos.length; i++) {
  proyectos[i].addEventListener("click", function() {
    // Redirigir a la página nueva con el PDF correspondiente
    switch (this.id) {
      case "proyecto1":
        window.location.href = "portafolio/mahal.pdf";
        break;
      case "proyecto2":
        window.location.href = "portafolio/jf.pdf";
        break;
      case "proyecto3":
        window.location.href = "portafolio/Psicocenter.pdf";
        break;
		case "proyecto4":
        window.location.href = "portafolio/sergenind.pdf";
        break;
		case "proyecto5":
        window.location.href = "portafolio/ImpactoVerde.pdf";
        break;
		case "proyecto6":
        window.location.href = "portafolio/Allan_E.pdf";
        break;
      default:
        // Redirigir a una página de error o hacer algo más si es necesario
        break;
    }
  });
}
