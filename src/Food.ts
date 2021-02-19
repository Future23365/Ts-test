export default class Food {

  element: HTMLElement;
  maxPosition: number;

  constructor(maxPosition: number = 29) {
    this.element = document.getElementById('food')!;
    this.maxPosition = maxPosition
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let top = Math.round(Math.random() * this.maxPosition) * 10
    let left = Math.round(Math.random() * this.maxPosition) * 10

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }
}