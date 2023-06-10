var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('<html><body>Site da Fatec Sorocaba</body></html>'));
app.get('/historia', (req, res) => res.render('secao/historia'));
app.get('/cursos', (req, res) => res.render('secao/cursos'));
app.get('/professores', (req, res) => res.render('secao/professores'));
app.listen(3000, () => console.log('Servidor com Express foi carregado'));