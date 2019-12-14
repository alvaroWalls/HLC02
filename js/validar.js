function validar()
{


	var banderaNombre = comprobarNombre();
	var banderaApellido = comprobarApellido();
	var banderaDni = comprobarDni();
	var banderaLocalidad = comprobarLocalidad();
	var banderaTelefono = comprobarTelefono();
	var banderaCodigoPostal = comprobarCP();
	var banderaDireccion = comprobarCorreo();
	var banderaRecomendacion = comprobarTextBox();
	var banderaCursos = comprobarCursos();
	if (banderaNombre == false)
		return false;
	else
		if (banderaApellido == false)
			return false;
	else
		if (banderaDni == false)
			return false;
	else
		if (banderaLocalidad == false)
		return false;
	else
		if (banderaTelefono == false)
			return false;
	else
		if (banderaCodigoPostal == false)
			return false;
	else
		if (banderaDireccion == false)
			return false;
	else
		if (banderaRecomendacion == false)
			return false;
	else
		if (comprobarCursos == false)
			return false; 
}

function comprobarNombre()
{
	var nombre = document.getElementById("nombre").value;
	if (nombre == "")
	{
		alert("El campo nombre esta vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if (nombre.length > 25)
	{
		alert("Nombre demasiado largo");
		return false;
	}
	else
		return true;
}

function comprobarApellido()
{
	var apellido = document.getElementById("apellido").value;
	if (apellido == "")
	{
		alert("El campo apellido esta vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if (apellido.length > 35)
	{
		alert("Apellido demasiado largo");
		return false;
	}
	else
		return true;
}

function comprobarDni()
{
	var dni = document.getElementById("dni").value;

	if (dni == "")
	{
		alert("El campo dni esta vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if (dni.length != 9)
	{
		alert("DNI tiene que tener 9 carácteres");
		return false;
	}
	else
		return true;
}

function comprobarLocalidad()
{
	var localidad = document.getElementById("localidad").value;
	if (localidad == "")
	{
		alert("El campo localidad esta vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if (localidad.length > 35)
	{
		alert("Localidad demasiado largo");
		return false;
	}
	else
		return true;
}

function comprobarTelefono()
{
	var telefono = document.getElementById("telefono").value;
	if(telefono == "")
	{
		alert("El campo telefono esta vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if (isNaN(telefono))
	{
		alert("El campo telefono no puede contener letras");
		console.log("Error campo numerico");
		return false;
	}
	else if (telefono.length != 9)
	{
		alert("El numero tiene que ser de 9 digitos");
		console.log("Error campo numerico");
		return false;
	}
	else
		return true;
}

function comprobarCP()
{
	var codpostal = document.getElementById("codpostal").value;
	if(codpostal == "")
	{
		alert("El campo codpostal esta vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if (isNaN(codpostal))
	{
		alert("El campo codpostal no puede contener letras");
		console.log("Error campo numerico");
		return false;
	}

}

function comprobarCorreo()
{
	var expresion =/\w+@\w+\.+[a-z]/; /*Se crea una expresion que coincidad con "texto@texto.texto(a-z)"*/
	var correo = document.getElementById("direccion").value;
	if (correo == "")
	{
		alert("El campo correo no puede estar vacio");
		console.log("Error campo vacio");
		return false;
	}
	else if(!expresion.test(correo))
	{
		alert("Correo mal escrito");
		console.log("Error campo correo electronico");
		return false;
	}
	return true;

}

function comprobarTextBox()
{
	if (!((document.getElementById("SI").checked)) && (!(document.getElementById("NO").checked)))
	{
		alert("Rellene los campos de Recomendacion de Página");
		console.log("Error campo vacio");
		return false;
	}
	else if ((document.getElementById("SI").checked) && (document.getElementById("NO").checked))
	{
	    alert("Es bipolar, eliga solo uno campo");
		console.log("Error campo Recomendacion");
		return false;
	}
	else
		return true;
}

function comprobarCursos()
{
	if (!((document.getElementById("radio_1").checked)) && (!(document.getElementById("radio_2").checked)) && (!(document.getElementById("radio_3").checked)) )
	{
		alert("Rellene los campos de Cursos");
		console.log("Error campo vacio");
		return false;
	}
	else
		return true;
}

