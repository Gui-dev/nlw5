import Image from 'next/image'
import Slider from 'rc-slider'

import { usePlayer } from '../../context/PlayerContext'
import { Container, CurrentEpisode, Footer, Buttons } from './style'

export const Player = () => {
  const { episodeList, currentEpisodeIndex } = usePlayer()
  const episode = episodeList[currentEpisodeIndex]

  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora" title="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      { episode
        ? (
          <CurrentEpisode>
            <Image
              src={ episode.thumbnail }
              width={ 592 }
              height={ 592 }
              objectFit="contain"
            />
            <strong>{episode.title}</strong>
            <p>{episode.members}</p>
          </CurrentEpisode>
          )
        : (
          <div className="emptyPlayer">
            <strong>Selecione um podcast para ouvir</strong>
          </div>
          )
      }

      <Footer className={ !episode ? 'empty' : '' }>
        <div>
          <span>00:00</span>
          <div className="slider">
            { episode
              ? (
                  <Slider
                    trackStyle={{ backgroundColor: '#84D361' }}
                    railStyle={{ backgroundColor: '#9F75FF' }}
                    handleStyle={{ borderColor: '#84D361', borderWidth: 4 }}
                  />
                )
              : (
                  <div className="emptySlider"/>
                )
            }
          </div>
          <span>00:00</span>
        </div>

        <Buttons>
          <button disabled={ !episode }>
            <img src="/shuffle.svg" alt="Ordem aleátoria" title="Ordem aleátoria"/>
          </button>
          <button disabled={ !episode }>
            <img src="/play-previous.svg" alt="Tocar anterior" title="Tocar anterior"/>
          </button>
          <button className="playButton" disabled={ !episode }>
            <img src="/play.svg" alt="Tocar" title="Tocar"/>
          </button>
          <button disabled={ !episode }>
            <img src="/play-next.svg" alt="Tocar próxima" title="Tocar próxima"/>
          </button>
          <button disabled={ !episode }>
            <img src="/repeat.svg" alt="Repetir" title="Repetir"/>
          </button>
        </Buttons>

      </Footer>
    </Container>
  )
}
