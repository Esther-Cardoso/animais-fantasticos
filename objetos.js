// Exercicios prototype

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const esther = new Pessoa('Esther', 'Cardoso', 21)
console.log(esther.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document 

// NodeList.prototype  // assim aparece todos os metodos e propriedades 
// Object.getOwnPropertyNames(HTMLCollection.prototype) // assim também retorna

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li; HTMLLIElement 
// li.click;  function
// li.innerText; String
// li.value; Number
// li.hidden; Boolean
// li.offsetLeft; Number
// li.click(); undefined

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name; String
