import { GlobalStyles } from '@/src/commons/types/generated/styles/globalStyles';
import ApolloSetting from '@/src/components/commons/apollo';
import Layout from '@/src/components/commons/layout';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/dist/shared/lib/router/router';

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <ApolloSetting>
      <>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  )
}