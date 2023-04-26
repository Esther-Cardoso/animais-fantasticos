// Dimensões e distâncias
const listaAnimais = document.querySelector('.animais-lista')
const footer = document.querySelector('.copy')

console.log(listaAnimais.clientHeight)
console.log(footer.offsetTop)

const primeiroH2 = document.querySelector('h2')
const h2left = primeiroH2.offsetLeft

console.log(h2left)

const rect = primeiroH2.getBoundingClientRect()
console.log(rect)
console.log(rect.height)

console.log(
  window.innerWidth,
  window.innerHeight
)