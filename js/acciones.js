// JavaScript Document
function pregunta()
{
	datos="";
	$.ajax({
		type: "POST",
		url: "192.168.1.30/procesar.php",
		data: datos
	}).done(function(mensaje){
		alert (mensaje);
	});
}//fin de pregunta
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$("#btnconsulta").on("click",function(){
	alert("preguntando...");
	pregunta();
});
	
}); 
});

