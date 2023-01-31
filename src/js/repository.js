export default class errorReporitory {
  constructor() {
    this.errors = new Map([['125', 'Файл отсутсвует'], ['400', 'Не удается отправить']]);
  }
  
  translate(code) {
    const error = this.errors.get(code);
    if (error === undefined) {
      throw new Error('Unknown error');
    }
    return error;
  }
}
