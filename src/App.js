import React from 'react'; //, { Suspense, lazy }
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import HomeView from './views/HomeView';
import MoviesDetails from './views/MoviesDetails';
import MoviesView from './views/MoviesView';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
    <AppBar />
    {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <Switch>
        <Route exact path={routes.home} component={HomeView}/>
        <Route path={routes.moviesDetails} component={MoviesDetails}/>
        <Route path={routes.movies} component={MoviesView}/> 
      </Switch>
    {/* </Suspense> */}
    </>
  );
}

export default App;
