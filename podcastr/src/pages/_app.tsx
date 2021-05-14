import { AppProps } from 'next/app'

import { GlobalStyle } from '../style/global'
import { Container } from '../style/app'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <main>
        <GlobalStyle />
        <Header />
        <Component { ...pageProps }/>
      </main>
      <Player />
    </Container>
  )
}
