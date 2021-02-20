import Snake from './Sanke'
import ScorePanel from './ScorePanel'
import Food from './Food';

export default class GameControl {
  
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = '';
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(100, 1);
    this.init()
  }

  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    
    this.direction = event.key;
  }

  run() {
    let x = this.snake.X;
    let y = this.snake.Y;
    
    switch(this.direction) {
      case 'ArrowUp':
        y -= 10;
        break;
      case 'ArrowDown':
        y += 10;
        break;
      case 'ArrowLeft':
        x -= 10;
        break;
      case 'ArrowRight':
        x += 10;
        break;
    }

    this.checkEat(x, y)

    try {
      this.snake.X = x;
      this.snake.Y = y;
    }catch(e) {
      alert(e.message);
      this.isLive = false;
    }
    
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat(x: number, y:number) {
    if(x === this.food.X && y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody()
    }
  }

}