import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react';
import {NextPage} from "next";

type EnhancedAppProps = AppProps & {
    Component: NextPage;
}

function MyApp({ Component, pageProps }: EnhancedAppProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
