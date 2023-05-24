let valor = 20.85

valor = valor.toLocaleString('pt-BR', { style:'currency', currency: 'BRL' }) 
// valor = valor.toLocaleString('en-US', { style:'currency', currency: 'USD' }) 

// 'pt-BR' = Formato do Brasil
// style:'currency' = para moeda
// currency: 'BRL' = O simbolo usado R$

console.log(valor)

// const aleatorio = Math.floor(Math.random() * 100)
// const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
const aleatorio = Math.floor(Math.random() * (500 - 300 + 1)) + 300

console.log(aleatorio)

// ====================== Exercicios ====================

// Retorne um número aleatório
// entre 1050 e 2000

const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050

console.log(numeroAleatorio)


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ')

console.log(numeros)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


let somaTotal = 0
listaPrecos.forEach((item) => {
  const numeroLimpo = item.toUpperCase().replace('R$ ', '').trim()
  const numeroArredondado = Number.parseFloat(numeroLimpo)
  somaTotal += numeroArredondado
})

console.log(somaTotal)
