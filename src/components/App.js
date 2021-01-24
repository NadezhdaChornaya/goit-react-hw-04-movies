import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { routesPages, routesDetailPages } from '../routes';
import Layout from './Layout';
import { Spinner } from './Loader';



const App = () => (
    <>
        <Layout>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    {routesPages.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                    {routesDetailPages.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Layout>
    </>
);


export default App;