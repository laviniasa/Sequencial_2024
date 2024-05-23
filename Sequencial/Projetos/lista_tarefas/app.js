const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tarefas'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL!');
});

// Exemplo de consulta SQL para selecionar dados
connection.query('SELECT * FROM tasks', (err, rows) => {
    if (err) {
        console.error('Erro ao selecionar tarefas:', err);
        return;
    }
    console.log('Tarefas selecionadas:', rows);
});

connection.end();
