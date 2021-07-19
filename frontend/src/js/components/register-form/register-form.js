export default class RegisterForm {
  constructor(element, handler) {
    this.element = typeof element === 'string' ?
      document.querySelector(element) : element;

    this.onRegister = this.onRegister.bind(this);
    this.handler = handler.bind(null);

    this.element.addEventListener('submit', this.onRegister);
  }

  onRegister(e) {
    e.preventDefault();

    const data = new FormData(this.element);

    this.handler(data);
  }
}
