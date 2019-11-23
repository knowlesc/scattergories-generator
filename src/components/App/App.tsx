import './App.scss';
import * as React from 'react';
import { Timer } from '../Timer/Timer';
import { Categories } from '../Categories/Categories';
import { Alphabet } from '../Alphabet/Alphabet';
import { Settings } from '../Settings/Settings';
import { Randomizer } from '../../services/Ranzomizer';

export const App: React.FC = () => {
  const [categories, setCategories] = React.useState(Randomizer.getRandomCategories(12));
  const [letter, setLetter] = React.useState(Randomizer.getRandomLetter());
  const [maxTime, setMaxTime] = React.useState(120);
  const [categoryCount, setCategoryCount] = React.useState(12);

  const randomizeGame = () => {
    setCategories(Randomizer.getRandomCategories(categoryCount));
    setLetter(Randomizer.getRandomLetter());
  };

  const settingsUpdated = (maxTime: number, categoryCount: number) => {
    setMaxTime(maxTime);
    setCategoryCount(categoryCount);
  }

  React.useEffect(() => {
    randomizeGame();
  }, [maxTime, categoryCount])

  return (
    <div className="app">
      <Timer maxTime={ maxTime } />
      <Categories categories={ categories } />
      <Alphabet letter={ letter } randomize={ randomizeGame } />
      <Settings defaultMaxTime={ maxTime }
        defaultCategoryCount={ categoryCount }
        onChange={ settingsUpdated } />
    </div>
  );
}
