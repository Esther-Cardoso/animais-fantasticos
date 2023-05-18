// Constructor function, cria um objeto
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida // this.marca = Carro.marca
  this.preco = precoAtribuido
}

const honda = new Carro('Honda', 3000)

function Carro2(marca, precoInicial) {
  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.marca = marca 
  this.preco = precoFinal
  // só aparece no final o que eu escolher exporta, usando a palavra this
}

const fiat = new Carro2('Fiat', 5000)