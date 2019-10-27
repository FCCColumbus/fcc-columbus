import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  MainContainer,
  HomeContainer,
  ScrollToTopOnMount,
  MembersContainer,
  SlackContainer,
  CalendarContainer,
  SigninContainer,
} from '../containers';

const Routes = () => (
  <Router>
    <ScrollToTopOnMount>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/members" component={MembersContainer} />
          <Route exact path="/slack" component={SlackContainer} />
          <Route exact path="/calendar" component={CalendarContainer} />
          <Route exact path="/signin" component={SigninContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </MainContainer>
    </ScrollToTopOnMount>
  </Router>
);

export default Routes;
