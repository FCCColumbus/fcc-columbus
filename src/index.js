import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import { client, Router } from './config';
import 'font-awesome/css/font-awesome.min.css';
import './sharedStyles/theme.scss';

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
