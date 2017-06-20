$(document).ready(function() { 
    $("#content").load("pages/inicial.html");
    $("#content").hide();
    $("#content").fadeIn();
});
            // Funcion para cargar un contenido en un div
    function cargarContenido(pagina){
        // Se carga la pagina en el div, antes se carga un gif
        $("#content").html("<img src='assets/img/clock.gif' class='clock' border='0' />").fadeOut(1000,function(){
             $("#content").load(pagina).fadeIn("fast");
        });

    }

