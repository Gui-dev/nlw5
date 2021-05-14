import { Container, Footer, Buttons } from './style'

export const Player = () => {
  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora" title="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <Footer className="empty">
        <div>
          <span>00:00</span>
          <div className="slider">
            <div className="emptySlider"/>
          </div>
          <span>00:00</span>
        </div>

        <Buttons>
          <button>
            <img src="/shuffle.svg" alt="Ordem aleátoria" title="Ordem aleátoria"/>
          </button>
          <button>
            <img src="/play-previous.svg" alt="Tocar anterior" title="Tocar anterior"/>
          </button>
          <button className="playButton">
            <img src="/play.svg" alt="Tocar" title="Tocar"/>
          </button>
          <button>
            <img src="/play-next.svg" alt="Tocar próxima" title="Tocar próxima"/>
          </button>
          <button>
            <img src="/repeat.svg" alt="Repetir" title="Repetir"/>
          </button>
        </Buttons>
      </Footer>
    </Container>
  )
}
