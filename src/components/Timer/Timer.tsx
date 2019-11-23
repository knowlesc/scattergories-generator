import './Timer.scss';
import * as React from 'react';
import { useInterval } from '../../hooks';
import { IconButton } from '../IconButton/IconButton';

export interface ITimerProps {
  maxTime: number;
}

export const Timer: React.FC<ITimerProps> = ({ maxTime }) => {
  const [time, setTime] = React.useState(maxTime);
  const [started, setStarted] = React.useState(false);

  useInterval(() => {
    setTime((t) => t - 1);
    if (time === 1) {
      resetClicked();
      if (Audio) {
        const audio = new Audio('build/alarm.mp3');
        audio.play();
      }
    }
  }, started ? 1000 : null);

  const pauseClicked = () => {
    setStarted(false);
  };

  const playClicked = () => {
    setStarted(true);
  };

  const resetClicked = () => {
    setStarted(false);
    setTime(maxTime);
  }

  return (
    <section className="timer-wrapper">
      <div className="timer">
        <div className="timer-time">{ time }</div>
        <div className="actions">
          { !started && <IconButton icon="play" onClick={ playClicked } /> }
          { !!started && <IconButton icon="pause" onClick={ pauseClicked } /> }
          { (!!started || time !== maxTime) && <IconButton icon="redo" onClick={ resetClicked } />}
        </div>
      </div>
    </section>
  )
};
