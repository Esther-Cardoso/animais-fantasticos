const nomes = ['Esther', 'Cardoso', 'Fernandes']

nomes.forEach((item, index, array) => {
  console.log(item, index, array)
})

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosX2 = numeros.map((item) => item * 2)

console.log(numeros)
console.log(numerosX2)

const aulas = [ 
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAula = aulas.map((aula) => aula.min)

const nomeAulas = function(aula) {
  return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas)

console.log(tempoAula)
console.log(arrayNomeAulas)