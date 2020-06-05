// Comando para e

var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconecct', function(){
    console.log('Desconectado del servidor');
});


$('button').on('click', function(){
    console.log('click');
});