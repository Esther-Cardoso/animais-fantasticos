// foreach e arrow function 
const imagens = document.querySelectorAll('img')

// imagens.forEach(function(imagem){
//   console.log(imagem)
// })

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

// titulosArray.forEach((titulo) => console.log(titulo))

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((paragrafo) => console.log(paragrafo.innerText))

// Mostre o texto dos parágrafos no console


// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

