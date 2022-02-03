import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

import AppBar from './components/AppBar';
import Loader from './components/Loader';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */)
);

const MoviesDetailsView = lazy(() =>
  import('./views/MoviesDetailsView.jsx' /* webpackChunkName: "movies-details-view" */)
);

const MoviesView = lazy(() =>
  import('./views/MoviesView.jsx' /* webpackChunkName: "movies-view" */)
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView.jsx' /* webpackChunkName: "not-found-view" */)
);

function App() {
  return (
    <>
    <AppBar />
    <Suspense fallback={<Loader/>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView}/>
        <Route path={routes.moviesDetails} component={MoviesDetailsView}/>
        <Route path={routes.movies} component={MoviesView}/> 
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
    </>
  );
}

export default App;
