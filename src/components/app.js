import React from 'react';
import './app.less';
import 'antd/dist/antd.less';
import {
  Outlet, Link, useRoutes, useParams,
} from 'react-router-dom';
import Header from './header/header';
import routeConfig from '../route/routeConfig';

const App = function () {
  const element = useRoutes(routeConfig);
  return (

    <>
      <div>
        <Link to='/test'>test</Link>
      </div>
      <Link to='/header'>header</Link>
      <div><Link to='/mobxDemo'>mobxDemo</Link></div>
      {element}

    </>
  );
};

export default App;
