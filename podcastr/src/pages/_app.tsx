import Head from 'next/head'
import { AppProps } from 'next/app'

import { GlobalStyle } from '../style/global'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Podcastr</title>
      </Head>
      <GlobalStyle />
      <Component { ...pageProps }/>
    </>
  )
}
