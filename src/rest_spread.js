function somar() {
    let soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    return soma
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma
}

console.log(somarComRest(10, 20, 30))

const numeros = [1,2,3,4]
console.log(...numeros)

const timesFutebolSP = ['santos', 'palmeiras', 'bragantino', 'sao paulo']
const timesFutebolRio = ['vasco', 'botafogo', 'flamengo', 'fluminense']

const timesFutebol = [...timesFutebolSP, ...timesFutebolRio]

console.log(timesFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

const {motor: motorDaAna} = carroDaAna
const {motor: motorDaJulia} = carroDaJulia

console.log(motorDaAna)
console.log(motorDaJulia)

const [item1, item2, item3, ...outrosTimes] = timesFutebol

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)