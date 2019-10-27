import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Navigation } from 'components';

export class NavigationContainer extends Component {
  constructor() {
    super();
    this.state = {
      mobileActive: false,
      links: [
        {
          href: '/members',
          title: 'Members',
        },
        {
          href: '/slack',
          title: 'Slack',
        },
        {
          href: '/calendar',
          title: 'Calendar',
        },
        {
          href: '/signin',
          title: 'Sign In',
        },
      ],
      menu: 'Menu',
    };

    this.handleMobile = this.handleMobile.bind(this);
  }

  /* istanbul ignore next */
  componentDidMount() {
    this.props.history.listen((location, action) => {
      if (action === 'POP') {
        this.setState({ mobileActive: false });
      }
    });
  }

  /* istanbul ignore next */
  handleMobile(e, close) {
    if (close && !this.state.mobileActive) {
      return;
    }

    this.setState((prevState) => ({
      mobileActive: prevState.mobileActive ? !prevState.mobileActive : true,
    }));
  }

  render() {
    return (
      <Navigation
        links={this.state.links}
        menu={this.state.menu}
        mobileActive={this.state.mobileActive}
        handleMobile={this.handleMobile}
      />
    );
  }
}

NavigationContainer.propTypes = {
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NavigationContainer);
