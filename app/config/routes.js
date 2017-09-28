import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  MainContainer, HomeContainer, ScrollToTopOnMount,
  MembersContainer, SlackContainer, CalendarContainer,
  SigninContainer,
} from 'containers'

const getRoutes = (store) => (
  <Router>
    <ScrollToTopOnMount>
      <MainContainer>
        <Switch>
          <Route exact={true} path='/' component={HomeContainer} />
          <Route exact={true} path='/members' component={MembersContainer} />
          <Route exact={true} path='/slack' component={SlackContainer} />
          <Route exact={true} path='/calendar' component={CalendarContainer} />
          <Route exact={true} path='/signin' component={SigninContainer} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </MainContainer>
    </ScrollToTopOnMount>
  </Router>
)

export default getRoutes
