import { HungryBear } from './../src/bear-game.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();//Jest will recognize useFakeTimers--don't have to teach computer this. and it doesn't count in actual time.
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");//creates new HungryBear before each tests
    fuzzy.setHunger();//use setHunger in mult tests, so need to put this in beforeEach
  });

  afterEach(function() {
    jest.clearAllTimers();//clears all timers at end of test
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);//3001 milliseconds = just over 3 seconds
    expect(fuzzy.foodLevel).toEqual(7);//starts at 10, but goes to 7 after 3 seconds
  });

  test('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);//if fed after 9 seconds, foodLever goes back to 10
  });
});
