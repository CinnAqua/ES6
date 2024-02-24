let meuMap = new Map()
meuMap.set("nome", "miguel")
meuMap.set("stack", "html, css, js")

console.log(meuMap)

const nome = meuMap.get("nome")

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("nome"))

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")

console.log(meuMap)

const cpfs = new Set()

cpfs.add('12345678912')
cpfs.add('00345678912')
cpfs.add('12345678900')

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Miguel', 'José', 'Maria', 'Luana', 'Luana', 'Miguel']

const arrayComoSet = new Set([...array])

const arraySemDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemDuplicados)