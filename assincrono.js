// const promesa = new Promise((resolve, reject) => {
//   let condicao = true 
//   if(condicao) {
//     resolve({nome: 'Esther', idade: 21})
//   } else {
//     reject(Error('Ocorreu um erro na promise'))
//   }
// })

// promesa.then(resolucao => console.log(resolucao))

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login concluido')
  }, 1000);
})
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados concluido')
  }, 1500);
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then(resolucao => console.log(resolucao))