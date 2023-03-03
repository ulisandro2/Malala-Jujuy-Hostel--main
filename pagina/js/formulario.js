const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');








	

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
	apellido:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	apellido: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
	
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});





formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
   

    
        
    var data={
       nombre:document.getElementById('DatoNombre').value,
       apellido:document.getElementById('DatoApellido').value,
       desde:document.getElementById('DatoDesde').value,
       hasta:document.getElementById('DatoHasta').value,
       correo :document.getElementById('DatoCorreo').value,
       telefono :document.getElementById('DatoTelefono').value
    
    };
         emailjs.send('service_idzjve9', 'template_nzq24pr', data)
         .then(function(res){
             console.log('success', res.status);

         })
    



   

        
	


	// agregando toastify 

	Toastify({
		text:'Formulario enviado , te contactaremos por mail o telefeono ',
		duration: 7000,
		style: {
			background:"linear-gradient(to right, red, black)",
		}
	}).showToast();

    // agregando fetch
    
    var valorNombre = document.getElementById('DatoNombre').value;
	var valorApellido = document.getElementById('DatoApellido').value;
	var valorDesde = document.getElementById('DatoDesde').value;
	var valorHasta = document.getElementById('DatoHasta').value;
	var valorCorreo = document.getElementById('DatoCorreo').value;
	var valorTelefono = document.getElementById('DatoTelefono').value;
	 

  
    
    
    if(campos.nombre && campos.apellido  && campos.correo && campos.telefono  ){
		formulario.reset();
         
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
