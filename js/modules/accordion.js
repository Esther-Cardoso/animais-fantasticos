export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.acctiveClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.acctiveClass);
    item.nextElementSibling.classList.toggle(this.acctiveClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
