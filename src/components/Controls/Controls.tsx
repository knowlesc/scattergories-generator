import './Controls.scss';
import * as React from 'react';
import { IconButton } from '../IconButton/IconButton';

export interface IControlsProps {
  randomizeGame: () => void;
  startGame: () => void;
  pauseGame: () => void;
  stopGame: () => void;
  gameState: 'running' | 'paused' | 'ready';
}

export const Controls: React.FC<IControlsProps> = (
  { gameState, randomizeGame, startGame, pauseGame, stopGame }) => (
  <section className="controls-wrapper">
    <div className="controls">
      { gameState !== 'running' && <IconButton icon="play" onClick={ startGame } /> }
      { gameState === 'running' && <IconButton icon="pause" onClick={ pauseGame } /> }
      { gameState !== 'ready' && <IconButton icon="redo" onClick={ stopGame } />}
      <IconButton icon="dice-d20" onClick={ randomizeGame } />
    </div>
  </section>
);
