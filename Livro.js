class Livro {
    constructor(nome, autor, paginas) {
        this.nome = nome;
        this.autor = autor;
        this.paginas = paginas;
    }

    imprimir() {
        console.log(this);
    }

}

module.exports = Livro;
