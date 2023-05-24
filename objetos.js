// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0
let recebimentoTotal = 0
transacoes.forEach((item) => {
  const valorLimpo = +item.valor.replace('R$ ', '')
  if(item.descricao.slice(0,4) === 'Taxa') {
    taxaTotal += valorLimpo
  } else if (item.descricao.slice(0,4) === 'Rece') {
    recebimentoTotal += valorLimpo
  }
})

console.log(`Taxa = ${taxaTotal}`)
console.log(`Recebimento = ${recebimentoTotal}`)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')

console.log(arrayTransportes)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo = html.split('span').join('a')

console.log(htmlNovo)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(`Ultimo caracter = '${frase[frase.length - 1]}'`)
console.log(frase.slice(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0
transacoes2.forEach((item) => {
  if(item.trim().toLowerCase().includes('taxa')) {
    totalTaxas += 1
  }
})

console.log(`Existe ${totalTaxas} taxas`)