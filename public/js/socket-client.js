//Referencias de html 

const lblOnline = document.querySelector('#lblOnline'); 
const lblOffline = document.querySelector('#lblOffline');  



const socket = io();  //cliente, uso de objeto para exponer o ver los eventos del socket, io es lo que esta en el index html o a donde renderizemos nuestro index 

//escuchando cambios o eventos 

socket.on('connect', ()=>{ //saber cuando me conecto al servidor 
    console.log('conectado')
    lblOffline.style.display = 'none'
    lblOnline.style.display = '' //para visualizar el estado por pantalla al cliente 
}) //el on es para oír eventos 

socket.on('disconnect', ()=>{ //saber cuando se desconecto el servidor
    console.log('desconectado del server')
    lblOnline.style.display = 'none' //para visualizar el estado por pantalla al cliente
    lblOffline.style.display = '' 
      
}) 