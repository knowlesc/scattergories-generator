import { Letters } from '../data/Letters';
import { CategoryList } from '../data/CategoryList';

export class Randomizer {
  static getRandomCategories(count: number) {
    return this.getRandomNumbers(count, CategoryList.length)
      .map((index) => CategoryList[index]);
  }

  static getRandomLetter() {
    return Letters[this.getRandomNumbers(1, Letters.length)[0]];
  }

  private static getRandomNumbers(howMany: number, max: number) {
    var numbers = [];
    while(numbers.length < howMany) {
        const next = Math.floor(Math.random() * max);
        if(numbers.indexOf(next) === -1) numbers.push(next);
    }
    return numbers;
  }
}
