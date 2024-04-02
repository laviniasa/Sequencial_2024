CREATE TABLE TipoProduto (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Descrição TEXT
);

CREATE TABLE Fornecedor (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    CNPJ VARCHAR(14),
    Endereço VARCHAR(255)
);

CREATE TABLE Cliente (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Endereço VARCHAR(255)
);

CREATE TABLE Loja (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    CNPJ VARCHAR(14)
);

CREATE TABLE Venda (
    ID INT PRIMARY KEY,
    NúmeroNotaFiscal INT,
    Data DATE,
    ValorTotal DECIMAL(10,2),
    Cliente_ID INT,
    Loja_ID INT,
    FOREIGN KEY (Cliente_ID) REFERENCES Cliente(ID),
    FOREIGN KEY (Loja_ID) REFERENCES Loja(ID)
);

CREATE TABLE DetalhesVenda (
    ID INT PRIMARY KEY,
    Venda_ID INT,
    TipoProduto_ID INT,
    Preço DECIMAL(10,2),
    Quantidade INT,
    FOREIGN KEY (Venda_ID) REFERENCES Venda(ID),
    FOREIGN KEY (TipoProduto_ID) REFERENCES TipoProduto(ID)
);
