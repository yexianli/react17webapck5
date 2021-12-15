/* eslint-disable jsx-a11y/no-static-element-interactions */
import { observer } from 'mobx-react-lite';
import Timer from './timerStore';

const timer = new Timer();

const TimerView = function () {
  return (

  // eslint-disable-next-line react/react-in-jsx-scope
    <span onClick={() => { timer.increaseTimer(); }}>
      Seconds passed:
      {' '}
      {timer.secondsPassed}
    </span>

  );
};
export default observer(TimerView);
