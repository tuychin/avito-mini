import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
//Custom files
import Header from '../header';
import Footer from '../footer';
import BackToTopButton from '../back-to-top-button';
import {
  HomePage,
  ImmovablePage,
  CamerasPage,
  AutoPage,
  LaptopsPage,
  FavoritesPage
} from '../pages';

import './app.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main role="main" className="container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/immovable" component={ImmovablePage} />
          <Route path="/cameras" component={CamerasPage} />
          <Route path="/auto" component={AutoPage} />
          <Route path="/laptops" component={LaptopsPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route render={() => (
            <div className="jumbotron text-center">
              <h2>404<br/>Page not found</h2>
            </div>
          )} />
        </Switch>
      </main>
      <BackToTopButton />
      <Footer />
    </Fragment>
  );
}

export default App;