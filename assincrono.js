// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep.then(resolucao => resolucao.json())
// .then(body => {
//   const conteudo = document.querySelector('.conteudo')
//   conteudo.innerText = body.localidade
//   console.log(body)
// })

// ============= imagem ===============
const imagem = fetch('./img/imagem1.jpg')

imagem.then(resolucao => resolucao.blob())
.then(body => {
  const blobURL = URL.createObjectURL(body)
  const imagemDom = document.querySelector('img')
  imagemDom.src = blobURL
})

// =========== clone ============
// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep.then(resolucao => {
//   const resolucaoJson =  resolucao.clone()
//   resolucao.text().then((text) => console.log(text))
//   resolucaoJson.json().then((json) => console.log(json))
// })
// .then(body => {
//   const conteudo = document.querySelector('.conteudo')
//   conteudo.innerText = body.localidade
//   console.log(body)
// })