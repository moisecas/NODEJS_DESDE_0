

const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app); //importación de paquete, le paso mi servidor de express 
        this.io = require('socket.io')(this.server) //paquete de socket.io y le voy a mandar el this.server, información de los clientes conectados  

        this.paths = {
          
        }




        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }




    middlewares() {

        // CORS
        this.app.use( cors() );

        

        // Directorio Público, estableer un cliente que lo muestro en la carpeta public, frontend  
        this.app.use( express.static('public') );

      

    }

    routes() {
        
        
        
    }

    listen() { //servidor oyendo peticiones 
        this.server.listen( this.port, () => { //levantando el server de la clase server 
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;