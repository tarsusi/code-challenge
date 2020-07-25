import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { apolloClient } from './apollo';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
