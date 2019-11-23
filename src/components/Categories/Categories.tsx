import './Categories.scss';
import * as React from 'react';
import { Category } from '../Category/Category';

interface ICategoriesProps {
  categories: string[];
}

export const Categories: React.FC<ICategoriesProps> = ({ categories }) => {
  const [flipped, setFlipped] = React.useState<boolean>(false);
  const clicked = () => {
    setFlipped(!flipped);
  };

  return (
    <section className="categories-wrapper">
      <div className={ `categories ${flipped ? 'flipped' : 'not-flipped'}` }
        onClick={clicked}>
        { categories.map((cat, i) => <Category key={ i } categoryName={ cat } number={ i + 1 } />) }
      </div>
    </section>
  )
};
