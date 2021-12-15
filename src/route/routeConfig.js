import Test from '../components/test/test';
import Header from '../components/header/header';
import TimerView from '../components/mobxDemo/mobxDemo';

const NoMatch = function () {
  return <div>NoMatch</div>;
};
const Home = function () {
  return <div>home 1</div>;
};
const routeConfig = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/header',
    element: <Header />,
  }, {
    path: 'mobxDemo',
    element: <TimerView />,
  },
  { path: '*', element: <NoMatch /> },

];
export default routeConfig;
