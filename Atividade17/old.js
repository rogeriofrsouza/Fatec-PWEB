var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('<html><body>Site da Fatec Sorocaba</body></html>'));
app.get('/historia', (req, res) => res.send('<html><body>História da Fatec Sorocaba</body></html>'));
app.get('/cursos', (req, res) => res.send('<html><body>Cursos</body></html>'));
app.get('/professores', (req, res) => res.send('<html><body>Professores</body></html>'));
app.listen(3000, () => console.log('Servidor com Express foi carregado'));