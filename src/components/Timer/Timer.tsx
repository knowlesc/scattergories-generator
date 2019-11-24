import './Timer.scss';
import * as React from 'react';

export interface ITimerProps {
  time: number;
  maxTime: number;
}

export const Timer: React.FC<ITimerProps> = ({ time, maxTime }) => (
  <section className="timer-wrapper">
    <div className="timer">
      <div className="timer-progress"
        style={ { width: `${((maxTime - time) / maxTime) * 100}%` } }></div>
      <div className="timer-time">{ time }</div>
    </div>
  </section>
);
