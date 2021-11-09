$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Utilizar el evento “click” de jquery para mostrar una alerta al hacer un clic
//sobre el botón de "Enviar por Correo" mediante el uso de los selectores por Id,
//implementar el id a la etiqueta del botón con nombre: "enviarCorreo". El mensaje a
//mostrar en la alerta deberá ser: "El correo fue enviado correctamente...".


$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
});


//  Selectores de etiqueta: Utilizando los selectores de etiqueta y el método de jQuery
//`on` con el evento `dblclick`, solamente modificar el color del texto de los títulos
//"INGREDIENTES" y "PREPARACIÓN" a color rojo cuando se haga doble clic sobre
//cada uno de ellos por individual.

$("#pIng").on("dblclick",function(){
    $("#pIng").css("color", "red");
});

$("#pPre").on("dblclick",function(){
    $("#pPre").css("color", "red");
});


//Selectores de clase: Implementar los selectores de clases, utilizar el método de
//jQuery denominado `toggle` para hacer desaparecer y aparecer el contenido en todas
//las tarjetas "card" de la sección de Recetas Relacionadas, esto debe suceder cuando
//el usuario haga un clic sobre el título de cualquiera de las tres tarjetas.

$("#titulo1").on("click",function(){
    $("#card1").toggle();
});
