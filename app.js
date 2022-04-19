//modelo de servidor 

require('dotenv').config(); //reqerimos 

const Server = require('./models/server') //traermos el server 

const server = new Server()//instancia del servidor 

server.listen()  