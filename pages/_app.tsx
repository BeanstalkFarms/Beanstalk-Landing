import { ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import Script from 'next/script';

import '../styles/globals.css'

type EnhancedAppProps = AppProps & {
  Component: NextPage;
}

function MyApp({ Component, pageProps }: EnhancedAppProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(
    <>
      <Component {...pageProps} />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </>
  )
}

export default MyApp
