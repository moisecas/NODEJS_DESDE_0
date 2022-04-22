

const express = require('express');
const cors = require('cors');



class Server { //constructor del servidor 

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app); //importación de paquete, le paso mi servidor de express 
        this.io = require('socket.io')(this.server) //paquete de socket.io y le voy a mandar el this.server, información de los clientes conectados  
        //io información de los sockets conectados  
        this.paths = {
          
        }




        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();


        //Sockets, configuración, manejo de eventos en el socket 
        this.sockets(); 


    }




    middlewares() {

        // CORS
        this.app.use( cors() );

        

        // Directorio Público, estableer un cliente que lo muestro en la carpeta public, frontend  
        this.app.use( express.static('public') );

      

    }

    routes() {
        
        
        
    }

    sockets(){ //configuración de mis sockets 
        this.io.on('connection', socket =>{ //hace referencia a nuestro servidor de sockets
            console.log('cliente conectado', socket.id) //connection es un evento de sockets
            
            socket.on('disconnect', () =>{
                console.log('el cliente ya no esta', socket.id) //socket.id identificador, le da un id a cada conexión
            })
        })
    }

    listen() { //servidor oyendo peticiones 
        this.server.listen( this.port, () => { //levantando el server de la clase server 
            console.log('Servidor corriendo en puerto', this.port );
        });
    }



}




module.exports = Server;