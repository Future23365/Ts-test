export default class ScorePanel {

  score: number;
  level: number;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  maxLevel: number;
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.score = 0;
    this.level = 1;
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.scoreEle = document.getElementById('scoreId')!;
    this.levelEle = document.getElementById('level')!;
  }

  addScore() {
    this.score++;
    this.scoreEle.innerHTML = this.score + '';
    if(this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp() {
    if(this.level < this.maxLevel) {
      this.level++;
      this.levelEle.innerHTML = this.level + '';
    }
  }
}
