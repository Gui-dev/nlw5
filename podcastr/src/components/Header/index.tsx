import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from './style'

export const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  return (
    <Container>
      <img src="/logo.svg" alt="Podcastr" title="Podcastr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </Container>
  )
}
