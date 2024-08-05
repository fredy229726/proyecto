// Importar el módulo express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Definir el puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

// Middleware para analizar datos JSON
app.use(express.json());

// Middleware para servir archivos estáticos (como tu HTML)
app.use(express.static('public'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Ruta para manejar el formulario de apuesta
app.post('/submit', (req, res) => {
    const { nombre, ganador } = req.body;
    
    // Aquí puedes manejar los datos del formulario (guardar en una base de datos, etc.)
    console.log(`Nombre: ${nombre}, Ganador: ${ganador}`);

    // Responder al cliente
    res.send('Apuesta recibida.');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
