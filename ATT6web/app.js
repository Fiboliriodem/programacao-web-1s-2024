// app.js
const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
// Configurando o EJS 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para lidar com dados do formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  res.render('dados', { nome, endereco, telefone, data });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

