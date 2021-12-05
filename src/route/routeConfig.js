import App from '../components/app';
import Test from '../components/test/test';
import Header from '../components/header/header';

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
    },
    { path: '*', element: <NoMatch /> },

];
export default routeConfig;
