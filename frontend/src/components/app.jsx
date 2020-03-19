
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import './app.css'

const NoMatch = ({ location }) => (
    <div>
        <h1>Oops! Page Not Found</h1>
        <h3>Check Your Routing</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsmK-UJJRlHQnzjLtIrY0aOl0b2qGOdhzEJsmnkne4t-G0_x3H" />
    </div>
)

const App = () => (
    <div>
        <NavBarContainer />
        <div className="app-container">
            <div className="page-container">
            <Switch>
                <AuthRoute exact path="/" component={MainPage} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route component={NoMatch} />
            </Switch>
            </div>
        </div>
    </div>
);

export default App;