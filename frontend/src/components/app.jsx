import React from 'react';
import { PublicRoute, AuthRoute, PrivateRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import TicketContainer from './ticket/ticket_container';
import TicketIndex from './ticket_index/ticket_index';
import LeftPanelContainer from './left_panel/left_panel_container';
import UserIndexContainer from "./user_index/user_index_container"
import NotFound from './errors/not_found';

import './reset.css';
import './app.css';
import Slides from './tutorial/slides';
import { connect } from 'react-redux';

const toggleOffOwnerDiv = () => {
  const clickedItems = document.getElementsByClassName('true');
  if (clickedItems) {
    while (clickedItems.length) {
      clickedItems[0].classList.add('false');
      clickedItems[0].classList.remove('true');
    }
  }
}

const App = ({ loggedIn }) => (
  <div className="screen-container" onClick={() => toggleOffOwnerDiv()}>
    {loggedIn?
    <Slides/>
    :
    null}
    <NavBarContainer />
    <div className="app-container">
      <PrivateRoute path="/" component={LeftPanelContainer} />
      {/* <div className="page-container"> */}
        <Switch>
          <AuthRoute exact path="/" component={MainPage} />
          <PublicRoute exact path="/login" component={LoginFormContainer} />
          <PublicRoute exact path="/signup" component={SignupFormContainer} />
          <PrivateRoute exact path="/users/search/" component={UserIndexContainer} />
          <PrivateRoute exact path="/users/:userId" component={ProfileContainer} />
          <PrivateRoute exact path="/tickets/search/" component={TicketIndex} />
          <PrivateRoute exact path="/tickets/:ticketId" component={TicketContainer} />
          <PrivateRoute exact path="/tickets/:folder/:userId" component={TicketIndex} />
          <Route component={NotFound} />
        </Switch>
      {/* </div> */}
    </div>
  </div>
);

const msp = state => ({
  loggedIn: state.session.isAuthenticated
})

export default connect(msp, null)(App);

