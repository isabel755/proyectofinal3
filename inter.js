function limpiarFormulario1(){
	document.getElementById("miForm1").reset();
}

var calcularfs = function(s){
var s=parseFloat(document.getElementById("s").value);
var resultado = (15*s-6*s);
 return resultado;
}

function limpiarFormulario2(){
	document.getElementById("miForm2").reset();
}

var calcularaltura = function (g,t){
var g=parseFloat(document.getElementById("g").value);
var t=parseFloat(document.getElementById("t").value);
var resultado = (g*t*t/2);
 return resultado;
}
