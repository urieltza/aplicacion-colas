// Comando para e

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(estadoActual){
    label.text(estadoActual.actual);
});

$('button').on('click', function(){

    socket.emit('ST', null, function(siguienteTicket)
    {
        label.text(siguienteTicket);
    });

});