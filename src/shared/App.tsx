// import React, { Suspense } from 'react';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import routes from './routes';
import css from './App.module.css';


const App: React.FC<any> = () => {
    return (
        <div className={css.wrapper}>
            <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route exact path={routes.page1} component={Signup} />
                <Route exact path={routes.page2} component={Dashboard} />
                <Route render={() => '404!'} />
            </Switch>
        </div>
    );
};

export default App;
