import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { NavigationContainer } from 'containers';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
export class MainContainer extends Component {
  render() {
    return (
      <>
        <NavigationContainer />
        <div className={styles.container}>{this.props.children}</div>
      </>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(MainContainer);
