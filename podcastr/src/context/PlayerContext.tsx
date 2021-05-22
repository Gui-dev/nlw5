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
  hasPrevious: boolean
  hasNext: boolean
  play: (episode: IEpisode) => void
  playList: (episodesList: IEpisode[], index: number) => void
  playNext: () => void
  playPrevious: () => void
  togglePlay: () => void
  setPlayingState: (state: boolean) => void
}

export const PlayerContext = createContext({} as IPlayerContextProps)

export const PlayerProvider: FC = ({ children }) => {
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const hasPrevious = currentEpisodeIndex > 0
  const hasNext = (currentEpisodeIndex + 1) < episodeList.length

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

  const playNext = () => {
    if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  const playPrevious = () => {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
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
      hasPrevious,
      hasNext,
      play,
      playList,
      playNext,
      playPrevious,
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
