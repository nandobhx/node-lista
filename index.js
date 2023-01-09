const Lista = require("./Lista");
const Livro = require("./Livro");

const listaLivros = new Lista();

console.log("*****************");
console.log("-- Lista vazia --");
listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Incluído 4 Livros --");
listaLivros.adicionar(new Livro("Dom Casmurro", "Machado de Assis", 250));
listaLivros.adicionar(new Livro("O Mundo de Sofia", "Jostein Gaarder", 350));
listaLivros.adicionar(new Livro("O Monge e o Executivo", "James C. Hunter", 150));
listaLivros.adicionar(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 175));

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Recuperando livro de índice 0 --");
let livroAtual = listaLivros.pegar(0);
console.log(livroAtual);

console.log("-- Recuperando livro de índice 1 --");
livroAtual = listaLivros.pegar(1);
console.log(livroAtual);

console.log("-- Recuperando livro de índice 2 --");
livroAtual = listaLivros.pegar(2);
console.log(livroAtual);

console.log("-- Recuperando livro de índice 3 --");
livroAtual = listaLivros.pegar(3);
console.log(livroAtual);

console.log("-- Recuperando livro de índice 4 --"); // Não acontece nada, pois não existe o índice 4 
livroAtual = listaLivros.pegar(4);
console.log(livroAtual);

console.log("-- Removendo o índice 0 --");
listaLivros.remover(0);

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Removendo o índice 1 --");
listaLivros.remover(1);

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Removendo o índice 2 --"); // Não acontece nada, pois não existe o índice 2
listaLivros.remover(2);

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Removendo o índice 0 --");
listaLivros.remover(0);

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Removendo o índice 1 --"); // Não acontece nada, pois não existe o índice 1
listaLivros.remover(1);

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);

console.log("-- Removendo o índice 0 --");
listaLivros.remover(0);

listaLivros.listar();
console.log(`Quantidade de Livros: ${listaLivros.pegarQuantidade()}`);
