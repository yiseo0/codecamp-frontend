import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/dist/shared/lib/router/router';

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  const client = new ApolloClient({
    uri: 'http://practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}