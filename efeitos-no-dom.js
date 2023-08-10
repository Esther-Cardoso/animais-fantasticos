const div = document.querySelector('[data-cor]')

div.dataset.bg = 'red white'
delete div.dataset.width
div.dataset.totalWidth = 2000

console.log(div.dataset)
console.log(div.dataset.cor)