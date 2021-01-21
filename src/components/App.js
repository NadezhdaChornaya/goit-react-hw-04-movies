import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';
import MovieDetails from '../pages/MovieDetails';
// import Layout from ''



const App = () => (
    <>
        <ul>
            <li>
                <NavLink exact to="/"
                    className="navigation-link"
                    activeClassName="navigation-link-active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies"
                    className="navigation-link"
                    activeClassName="navigation-link-active">Movies</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route component={NotFound} />
        </Switch>
    </>
);


export default App;