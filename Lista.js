const No = require("./No");

class Lista {
    constructor() {
        this.primeiroNo = null;
        this.quantidadeNos = 0;
    }

    /**
     * Adiciona um livro na lista
     */
    adicionar(livro) {

        let no = new No(livro);

        if (this.primeiroNo === null) {
            this.primeiroNo = no;
        } else { 

            let ultimo = this.primeiroNo;
            while (ultimo.no != null) {
                ultimo = ultimo.no;
            }
            ultimo.no = no;

        }
        this.quantidadeNos++;

    }

    /**
     * Remove um livro da lista
     */
    remover(posicao) {

        if (posicao > this.quantidadeNos - 1) {
            return false;
        }

        let noAnterior = null;
        for (let i = 1; i <= posicao; i++) {
            noAnterior = noAnterior === null ? this.primeiroNo : noAnterior.no;
        }
        
        if (noAnterior === null) {
            this.primeiroNo = this.primeiroNo.no;
        } else {
            noAnterior.no = noAnterior.no.no;
        }
        this.quantidadeNos--;

        return true;

    }

    /**
     * Lista todos os livros da lista
     */
    listar() {

        if (this.primeiroNo != null) {
            let ultimo = this.primeiroNo;
            while (ultimo.no != null) {
                ultimo.livro.imprimir();
                ultimo = ultimo.no;
            }
            ultimo.livro.imprimir();
        }

    }

    /**
     * Pega um livro da lista
     */
    pegar(posicao) {

        if (posicao > this.quantidadeNos - 1) {
            return null;
        }

        let noAtual = this.primeiroNo;
        for (let i = 1; i <= posicao; i++) {
            noAtual = noAtual.no;
        }
        return noAtual.livro;

    }

    /**
     * Retorna a quantidade de livros na lista
     */    
    pegarQuantidade() {
        return this.quantidadeNos;
    }
        
}

module.exports = Lista;
