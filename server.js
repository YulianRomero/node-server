// servidor HTTP

const http = require('http');
const port = 3000;
const host = "localhost";

// Definir la lista de tareas
const tasks = [
    { id: 1, descripcion: 'acudir cita medica', estado: "pendiente" },
    { id: 2, descripcion: 'mantenimiento motocicleta', estado: "completado" },
    { id: 3, descripcion: 'reunion familiar', estado: "pendiente" }
  ];


const server = http.createServer((req, res)=>{
    if(req.method === 'GET' && req.url === '/tareas'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));
    }else{
        res.statusCode = 404;
        res.end('Recurso no encontrado');
    } 
}) 

server.listen(port, host, ()=>{
    console.log("Servidor encendido");
})