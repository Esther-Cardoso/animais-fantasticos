const h1 = document.querySelector('h1')

console.log(h1.innerHTML) // pega o conteudo de dentro do h1
console.log(h1.innerText) // pega só o texto
console.log(h1.outerHTML) // pega toda a tag 

// h1.innerHTML = '<p>Novo titulo</p>' // coloca dentro do h1 = <h1><p>novo titulo</p></h1>

// h1.innerText = '<p>Aqui ele não renderiza a tag</p>' // só muda o texto

// h1.outerHTML = '<a href="#">Titulo</a>' // substitui a tag h1 pela tag a

// ============== Traversing e Manipulação ===============
const animaisLista = document.querySelector('.animais-lista')

console.log(animaisLista.parentElement) // pega o elemento pai o que envolve ele
console.log(animaisLista.nextElementSibling) // pega o proximo elemento no mesmo nivel dele
console.log(animaisLista.previousElementSibling) // pega o elemento anterior no mesmo nivel dele

console.log(animaisLista.children) // pega os filhos
console.log(animaisLista.children[0]) // pega o primeiro elemento
console.log(animaisLista.children[--animaisLista.children.length]) // pega o ultimo elemento da lista
console.log(animaisLista.querySelector('li:last-child')) // pegando o ultimo item com seletor css

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('h1')

// animais.appendChild(titulo) // move o titulo para o final de animais

const mapa = document.querySelector('.mapa')

// contato.insertBefore(animais, mapa)  // ele insere a lista antes do mapa, é importa o segundo parametro preciso estar dentro do elemento pai, aqui no caso é mapa dentro de contato

// contato.removeChild(titulo) // exlui o titulo de contato
// contato.replaceChild(h1, mapa) // substitui o mapa pelo titulo de h1

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo titulo'
novoH1.classList.add('titulo')

mapa.appendChild(novoH1)

const cloneNovoH1 = novoH1.cloneNode(true) // clona o elemento, com o true ele clone com tudo que tem dentro

cloneNovoH1.innerText = 'Esther'
animais.appendChild(cloneNovoH1)