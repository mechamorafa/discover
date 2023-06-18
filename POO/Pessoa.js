class Pessoa{
    constructor(nome){
        this.id = ~(Math.random() * 100000)
        this.nome = nome
    }
}

const pessoa = new Pessoa('Rafa')