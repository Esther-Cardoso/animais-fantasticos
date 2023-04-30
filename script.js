// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const footer = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true)

footer.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista')
const primeiraDT = faq.querySelector('dt')

console.log(primeiraDT)

// Selecione o DD referente ao primeiro DT
console.log(primeiraDT.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const aniamis = document.querySelector('.animais')

faq.innerHTML = aniamis.innerHTML