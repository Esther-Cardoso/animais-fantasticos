// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     this.element().classList.add('ativar')
//   }
// }

// Dom.ativar()

// Dom.seletor = 'ul'
// Dom.ativar()

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor)
  }
  this.ativar = function(classe) {
    this.element().classList.add(classe)
  }
}

const li = new Dom('li')
const Lastli = new Dom('li:last-child')
Lastli.ativar('li-ativo')

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)
joao.andar()

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom2(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList

  this.addClass = function(classe) {
    elementList.forEach((item) => {
      item.classList.add(classe)
    })
  }
  this.removeClass = function(classe) {
    elementList.forEach((item) => {
      item.classList.add(classe)
    })
  }
}

const listaImg = new Dom2('img')
console.log(listaImg)
// listaImg.addClass('ativar')