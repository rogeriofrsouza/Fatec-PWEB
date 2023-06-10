var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home/index'));
app.get('/formulario_adicionar_usuario', (req, res) => res.render('admin/adicionar_usuario'));
app.get('/informacao/historia', (req, res) => res.render('informacao/historia'));
app.get('/informacao/cursos', (req, res) => res.render('informacao/cursos'));
app.get('/informacao/professores', (req, res) => res.render('informacao/professores'));
app.listen(3000, () => console.log('Servidor com Express foi carregado'));