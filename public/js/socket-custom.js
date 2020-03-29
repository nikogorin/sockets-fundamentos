var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor :)');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor :(');
});

// Enviar info
socket.emit('EnviarMensaje', {
    usuario: 'Nicolas',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar info
socket.on('enviarMensaje', function(msg) {
    console.log('Servidor', msg);
});