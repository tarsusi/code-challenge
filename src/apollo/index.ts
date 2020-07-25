import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const API_ENDPOINT = 'https://api.blocktap.io/graphql';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: API_ENDPOINT,
  }),
});
