import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class ScrollToTopOnMount extends Component {
  /* istanbul ignore next */
  static hashLinkScroll(hash) {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView();
      }

      const scrolledY = window.scrollY;

      if (scrolledY) {
        window.scroll(0, scrolledY);
      }
    }, 0);
  }

  /* istanbul ignore next */
  componentDidUpdate(prevProps) {
    const { hash } = window.location;

    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }

    if (hash !== '') {
      ScrollToTopOnMount.hashLinkScroll(hash);
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

ScrollToTopOnMount.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default withRouter(ScrollToTopOnMount);
