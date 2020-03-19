import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <>
      <Helmet>
        <title>CDBROUK</title>
        <meta name="description" content="Web Developer CDBROUK's portfolio" />
      </Helmet>
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </>
  );
};

export default App;
