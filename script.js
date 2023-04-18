const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[2])

const primeiraLI = document.querySelector('li')
console.log(primeiraLI)

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno.href)

const linksInterno = document.querySelectorAll('[href^="#"]')
console.log(linksInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const gridSectionHtml = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

// console.log(gridSectionHtml[0])
// console.log(gridSectionNode[0])

gridSectionNode.forEach(function(item, index){
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHtml)

// Exercicios 
// 1 - Retorne no console todas as imagens do site
const todasAsImagens = document.querySelectorAll('img')
console.log(todasAsImagens)

// 2 - Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('[src^="./img/imagem"]')
console.log(imagens)

// 3 - Selecione todos os links internos onde o href começa com  #
const link = document.querySelectorAll('[href^="#"]')
console.log(link)

// 4 - Selecione o primeiro h2  dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// 5 - Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1])