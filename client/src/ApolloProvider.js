import React from 'react';
import App from './App';

import {ApolloClient} from '@apollo/client';
import { ApolloProvider,createHttpLink, InMemoryCache } from '@apollo/react-hooks';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

// const authLink = setContext(() => {
//   const token = localStorage.getItem('jwtToken');
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);