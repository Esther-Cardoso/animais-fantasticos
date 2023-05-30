const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift()

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop()

// Adicione 'Arroz' ao final da array
const addArroz = comidas.push('arroz')

// Adicione 'Peixe' e 'Batata' ao início da array
const addNoInicio = comidas.unshift('peixe', 'batata')

console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const ordem = estudantes.sort()

// Inverta a ordem dos estudantes
const inverta = estudantes.reverse()

// Verifique se Joana faz parte dos estudantes
const joana = estudantes.includes('Joana')
console.log(joana)

// Verifique se Juliana faz parte dos estudantes
const juliana = estudantes.includes('Juliana')
console.log(juliana)

console.log(estudantes)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')

console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice()
carros.pop()

console.log(carros)
console.log(cloneCarros)