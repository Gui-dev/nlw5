import { createContext, FC, useContext, useState } from 'react'

interface IEpisode {
  title: string
  members: string
  thumbnail: string
  durationAsString: string
  duration: number
  url: string
}

interface IPlayerContextProps {
  episodeList: Array<IEpisode>
  currentEpisodeIndex: number
  isPlaying: boolean
  play: (episode: IEpisode) => void
  togglePlay: () => void
  setPlayingState: (state: boolean) => void
  playList: (episodesList: IEpisode[], index: number) => void
}

export const PlayerContext = createContext({} as IPlayerContextProps)

export const PlayerProvider: FC = ({ children }) => {
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = (episode: IEpisode) => {
    console.log('Clicou')
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const playList = (episodesList: IEpisode[], index: number) => {
    setEpisodeList(episodesList)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      isPlaying,
      play,
      playList,
      togglePlay,
      setPlayingState
    }}
    >
      { children }
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)

  return context
}