const express = require('express');
const app = express();

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque.');
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque.');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque = estoque.map(produto => {
        if (produto.id === id) {
            produto.quantidade = parseInt(qtd);
        }
        return produto;
    });
    res.send('Quantidade do produto editada.');
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});
