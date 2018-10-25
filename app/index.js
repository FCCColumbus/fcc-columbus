import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import getRoutes from 'config/routes'

import 'font-awesome/css/font-awesome.min.css'
import 'sharedStyles/theme.scss'

const client = new ApolloClient({
  uri: '/api/graphql',
})

ReactDOM.render(<ApolloProvider client={client}>{getRoutes()}</ApolloProvider>, document.getElementById('app'))
