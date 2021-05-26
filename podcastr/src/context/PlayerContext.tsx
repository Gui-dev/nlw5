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
  isLooping: boolean
  isShuffling: boolean
  play: (episode: IEpisode) => void
  playList: (episodesList: IEpisode[], index: number) => void
  playNext: () => void
  playPrevious: () => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  setPlayingState: (state: boolean) => void
  clearPlayerState: () => void
}

export const PlayerContext = createContext({} as IPlayerContextProps)

export const PlayerProvider: FC = ({ children }) => {
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const hasPrevious = currentEpisodeIndex > 0
  const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length

  const play = (episode: IEpisode) => {
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
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length)
      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if (hasNext) {
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

  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  const clearPlayerState = () => {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      isPlaying,
      hasPrevious,
      hasNext,
      isLooping,
      isShuffling,
      play,
      playList,
      playNext,
      playPrevious,
      togglePlay,
      toggleLoop,
      toggleShuffle,
      setPlayingState,
      clearPlayerState
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
