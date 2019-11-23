import './Alphabet.scss';
import * as React from 'react';
import { IconButton } from '../IconButton/IconButton';

export interface IAlphabetProps {
  letter: string;
  randomize: Function;
}

export const Alphabet: React.FC<IAlphabetProps> = ({ letter, randomize }) => {

  const rollClicked = () => {
    randomize();
  };

  return (
    <section className="alphabet-wrapper">
      <div className="alphabet">
        <div className="alphabet-letter">{ letter }</div>
        <div className="actions"><IconButton icon="redo" onClick={ rollClicked }/></div>
      </div>
    </section>
  );
}
