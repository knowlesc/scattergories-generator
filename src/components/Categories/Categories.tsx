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
    <section className={ `categories-wrapper flip-container ${flipped ? 'flipped' : ''}` }>
      <div className="flipper"
        onClick={clicked}>
        <div className="categories front">
        </div>
        <div className="categories back">
          { categories.map((cat, i) => <Category key={ i } categoryName={ cat } number={ i + 1 } />) }
        </div>
      </div>
    </section>
  )
};
