// classes e atributos
const menu = document.querySelector('.menu')

menu.classList.add('ativo', 'teste')
menu.classList.remove('teste')
menu.classList.toggle('dark') // se tiver a tag ele remove / se não tiver ele coloca

if(menu.classList.contains('dark')) {
  console.log('website cor escura')
}
 
console.log(menu.classList[1])
console.log(menu.classList)

const animais = document.querySelector('.animais')
console.log(animais.attributes.class)

const img = document.querySelector('img')
console.log(img.getAttribute('src'))

const setAltImg = img.setAttribute('alt', 'É uma raposa')
console.log(img)

const possuiTitulo = img.hasAttribute('title')
console.log(possuiTitulo)
