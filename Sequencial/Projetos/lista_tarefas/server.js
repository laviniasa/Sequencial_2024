const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tarefas'
});

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para obter as tarefas do banco de dados
app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, rows) => {
        if (err) {
            console.error('Erro ao selecionar tarefas:', err);
            res.status(500).send('Erro ao selecionar tarefas');
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Servidor está executando em http://localhost:${port}`);
});
