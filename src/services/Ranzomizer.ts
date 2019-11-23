import { Letters } from './../data/Letters';
import { CategoryList } from './../data/CategoryList';

export class Randomizer {
  static getRandomCategories(count: number) {
    return (new Array(count))
      .fill(null)
      .map(() => CategoryList[Math.floor(Math.random() * CategoryList.length)]);
  }

  static getRandomLetter() {
    return Letters[Math.floor(Math.random() * Letters.length)]
  }
}
