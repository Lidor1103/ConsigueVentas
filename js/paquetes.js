//Animaciones
AOS.init({
	duration: 1000,
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


// LLenar el formulario según el botón del servicio
function llenarCamposFormulario(asunto, consulta) {
	document.getElementById('Asunto').value = asunto;
	document.getElementById('consulta').value = consulta;

	const formularioOffsetTop = document.getElementById('formulario').offsetTop;
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

document.getElementById("paquete1").addEventListener('click', function () {
	const asunto = "Paquete WEB EFICAZ";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});

document.getElementById("paquete2").addEventListener('click', function () {
	const asunto = "Paquete WEB ELITE EMPRESARIAL";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});

document.getElementById("paquete3").addEventListener('click', function () {
	const asunto = "Paquete WEB ÉXITO ECOMMERCE";
	const consulta = "Hola Consigue Ventas, deseo trabajar con ustedes! ¿Me pueden enviar más información sobre este servicio?";
	llenarCamposFormulario(asunto, consulta);
});