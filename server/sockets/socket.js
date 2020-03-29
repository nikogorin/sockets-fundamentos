const { io } = require('../server'); //importo variable de server.js

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', { usuario: 'Administrador', mensaje: 'Bienvenido a esta aplicacion' })



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (msg.usuario) {
        //     callback({
        //         resp: 'SALIO BIEN :)'
        //     });
        // } else {
        //     callback({
        //         resp: 'SALIO MAL :('
        //     });
        // }

    });
});