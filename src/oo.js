// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nome = nomePokemon
//     this.tipo = tipoPokemon
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico")

class Pokemon {
    #hp = 100

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon
        this.tipo = tipoPokemon
    }
    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`)
    }

    recebeuDano() {
        this.#hp -=10
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu()

pikachuDoAsh.hp = 5000
pikachuDoAsh.recebeuDano()

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()