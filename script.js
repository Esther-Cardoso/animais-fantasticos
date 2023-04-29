// Eventos
const img = document.querySelector('img')

function callback(event) {
  console.log(event)
}

img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callLista(event) {
  console.log(event.currentTarget)
  console.log(event.target)
  console.log(this)
}

animaisLista.addEventListener('click', callLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
  event.preventDefault()
  console.log('Clicou')
  console.log(this.getAttribute('href'))
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event.type, event)
}

h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)

function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen')
  }
}

window.addEventListener('keydown', handleKeyboard)