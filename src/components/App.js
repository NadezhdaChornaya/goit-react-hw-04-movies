import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFound from '../pages/NotFound';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import routes from '../routes';
import Layout from './Layout';
// import Layout from ''



const App = () => (
    <>
        <Layout>
            <Switch>
                <Route path={routes.home} exact component={HomePage} />
                <Route path={routes.movies} exact component={MoviesPage} />
                <Route path={routes.movieDetails} component={MovieDetailsPage} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </>
);


export default App;