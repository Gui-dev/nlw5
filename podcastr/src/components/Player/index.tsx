import Image from 'next/image'
import Slider from 'rc-slider'
import { useEffect, useRef } from 'react'

import { usePlayer } from '../../context/PlayerContext'
import { Container, CurrentEpisode, Footer, Buttons } from './style'

export const Player = () => {
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    hasPrevious,
    hasNext,
    playNext,
    playPrevious,
    togglePlay,
    setPlayingState
  } = usePlayer()
  const episode = episodeList[currentEpisodeIndex]
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

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

        { episode && (
          <audio
            src={ episode.url }
            ref={ audioRef }
            autoPlay
            onPlay={ () => setPlayingState(true) }
            onPause={ () => setPlayingState(false) }
          />
        ) }

        <Buttons>
          <button disabled={ !episode }>
            <img src="/shuffle.svg" alt="Ordem aleátoria" title="Ordem aleátoria"/>
          </button>
          <button disabled={ !episode || !hasPrevious } onClick={ playPrevious }>
            <img src="/play-previous.svg" alt="Tocar anterior" title="Tocar anterior"/>
          </button>
          <button
            className="playButton"
            disabled={ !episode }
            onClick={ togglePlay }
          >
            { isPlaying
              ? <img src="/pause.svg" alt="Pausar episódio" title="Pausar episódio"/>
              : <img src="/play.svg" alt="Tocar episódio" title="Tocar episódio"/>
            }
          </button>
          <button disabled={ !episode || !hasNext } onClick={ playNext }>
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
