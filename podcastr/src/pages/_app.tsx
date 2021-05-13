import { AppProps } from 'next/app'

import { GlobalStyle } from '../style/global'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component { ...pageProps }/>
    </>
  )
}
