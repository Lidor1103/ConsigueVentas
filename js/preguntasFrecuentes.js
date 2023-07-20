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






const proyectos = document.getElementsByClassName("po_hover");
const imagencambiante = document.getElementById("imagencambiante");

for (let i = 0; i < proyectos.length; i++) {
	proyectos[i].addEventListener("click", function() {
	  // Obtener el nombre del proyecto
	  const proyecto = this.id;
  
	  // Redirigir a la página "OhMeVengo.html" pasando el nombre del proyecto como parámetro
	  window.location.href = `verproyecto.html?project=${proyecto}`;
	});
  }



  function convocatorias() {
	window.open('https://www.linkedin.com/jobs/search/?currentJobId=3658524454&f_C=68493411&geoId=92000000&originToLandingJobPostings=3658524454%2C3658609364%2C3658535145%2C3658630105%2C3658627115', '_blank');
  }

  function areas() {
    window.location.href = 'areas.html';
}



 // LLenar el formulario según el botón del servicio
 // Función para llenar los campos del formulario según el botón seleccionado
 function llenarCamposFormulario(asunto, consulta) {
	document.getElementById('Asunto').value = asunto;
	document.getElementById('consulta').value = consulta;

	const formularioOffsetTop = document.getElementById('contenedor_formulario').offsetTop;
	window.scrollTo({
		top: formularioOffsetTop,
		behavior: 'smooth'
	});

	// Agregar clase "input-lleno" a los campos de input que se llenaron
	document.getElementById('Asunto').classList.add('input-lleno');
	document.getElementById('consulta').classList.add('input-lleno');

	// Remover clase después de 3 segundos (ajustable según tu preferencia)
	setTimeout(function() {
		document.getElementById('Asunto').classList.remove('input-lleno');
		document.getElementById('consulta').classList.remove('input-lleno');
	}, 3000); // 3000 milisegundos = 3 segundos (ajustable según tu preferencia)
}

// Agregar los eventos de clic a los botones de servicios (botonembudo, botonpagina, botoncatalogo) ...
document.getElementById("botonembudo").addEventListener('click', function() {
	const asunto = "Deseo más información sobre el servicio - Embudo de Ventas";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});

document.getElementById("botonpagina").addEventListener('click', function() {
	const asunto = "Deseo más información sobre el servicio - Páginas Web";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});

document.getElementById("botoncatalogo").addEventListener('click', function() {
	const asunto = "Deseo más información sobre el servicio - Catálogo Virtual";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});