
document.getElementById("suscribirse").addEventListener("click",validacion);

function validacion(){
	
	var name = document.getElementById("name").value;
	var mail = document.getElementById("email").value;
	var dir = document.getElementById("dir").value;
	var eleccion = document.getElementsByTagName("select");

	var validateName = (/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(name);
	var validateMail = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(mail);
	var validateDir = (/^[A-Z][a-z]{3,19}\s[0-9]{1,6}$/).test(dir);
	var validateSelect = function(){
		var large = eleccion.length;
		for (i=0 ; i<large ; i++){
			if (eleccion[i].value == "Selecciona"){
				return true;
			}
		}
	}


	if (!validateName || !validateMail || !validateDir || validateSelect()){
		alert("¡ERROR! Revisa una vez más los datos ingresados.");
	} else {
		alert("¡Muchas gracias por suscribirte!");
	}

}