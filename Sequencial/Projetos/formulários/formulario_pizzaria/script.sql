CREATE TABLE PedidoPizza (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Endereco VARCHAR(255),
    Telefone BIGINT,
    Tamanho ENUM('Pequena', 'Média', 'Grande'),
    Sabor VARCHAR(100),
    DataPedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ID: Uma coluna do tipo INT que é definida como AUTO_INCREMENT e PRIMARY KEY, o que significa que será gerada automaticamente e será única para cada registro na tabela.
Nome: Uma coluna do tipo VARCHAR(100) para armazenar o nome do cliente.
Endereco: Uma coluna do tipo VARCHAR(255) para armazenar o endereço do cliente.
Telefone: Uma coluna do tipo BIGINT para armazenar o número de telefone do cliente.
Tamanho: Uma coluna do tipo ENUM com os valores 'Pequena', 'Média' e 'Grande', representando os tamanhos possíveis da pizza.
Sabor: Uma coluna do tipo VARCHAR(100) para armazenar o sabor da pizza.
DataPedido: Uma coluna do tipo TIMESTAMP com o valor padrão CURRENT_TIMESTAMP, que armazenará automaticamente a data e hora em que o pedido foi feito.