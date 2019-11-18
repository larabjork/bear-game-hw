export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {//using a callback to setInterval here and therefore using fat arrow because of nested function/lexical scope issue
    setInterval(() => {
      this.foodLevel--;//when setHunger is called, it decreases food by 1 level for every second that passes
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}
