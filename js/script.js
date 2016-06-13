function UsandoPrompt(){
 var cadenaJSON = prompt("Ingrese cadena JSON: Con Nombre y Apellidos");
     var covertirJSON = JSON.parse(cadenaJSON);
	alert("Nombre: "+covertirJSON.nombre+"\n Apellidos: "+
		 covertirJSON.apellidos);

}
function validar(){
    user = document.getElementById("user").value;
    pass = document.getElementById("pwd").value;

    if( user == null || user.length == 0 || /^\s+$/.test(user)  ) {

       document.getElementById("error1").innerHTML = "<p>Ingrese Su Usuario</p>";
    document.getElementById("error2").innerHTML = ""
        return false;

    }

    else if ( pass == null || pass.length == 0 || /^\s+$/.test(pass))
    {
        document.getElementById("error1").innerHTML = ""
       document.getElementById("error2").innerHTML = "<p>Ingrese Su Password</p>"
        return false;
    }
     window.onload=updateReloj;
    /*alert("Formulario Enviado con los Siguientes Datos:\n Usuario :"+user+ "\nContraseña :"+pass)*/

}

function xxx(){

setInterval(function mostrar(){
    document.getElementById("one").innerHTML = "<img src='../img/1.jpg' alt=''>  ";
},4000);

setInterval(function mostrar(){
    document.getElementById("one").innerHTML = "<img src='../img/2.jpg' alt=''>  ";
},5000);
setInterval(function mostrar(){
    document.getElementById("one").innerHTML = "<img src='../img/3.jpg' alt=''>  ";
},6000);

}







