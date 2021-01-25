import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import NotFound from '../pages/NotFound';
import { routesPages, routesDetailPages } from '../routes';
import Layout from './Layout';
import { Spinner } from './Loader';



const App = () => (
    <>
        <Layout>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    {routesDetailPages.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                    {routesPages.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Redirect to="/" />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </Suspense>
        </Layout>
    </>
);


export default App;