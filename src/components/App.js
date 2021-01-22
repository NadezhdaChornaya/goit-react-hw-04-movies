import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFound from '../pages/NotFound';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import Navigation from './Navigation';
import routes from '../routes';
// import Layout from ''



const App = () => (
    <>
        <Navigation />
        <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movies} exact component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={NotFound} />
        </Switch>
    </>
);


export default App;