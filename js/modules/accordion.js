export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  const acctiveClass = 'ativo'

  if (accordionList.length) {
    accordionList[0].classList.add(acctiveClass)
    accordionList[0].nextElementSibling.classList.add(acctiveClass)

    function activeAccordion() {
      this.classList.toggle(acctiveClass)
      this.nextElementSibling.classList.toggle(acctiveClass)

    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}