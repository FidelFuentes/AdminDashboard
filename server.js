const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos desde el directorio build de React
app.use(express.static(path.join(__dirname, 'build')));

// Ruta principal que devuelve la aplicación React
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Elige el puerto y pone el servidor a escuchar
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
