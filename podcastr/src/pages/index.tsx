import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { convertDurationToTimeString } from '../utils/convertDurationToTimeString'
import { api } from './../services/api'
import { usePlayer } from '../context/PlayerContext'
import { Container, LatestEpisodes, AllEpisodes } from '../style/home'

export interface IEpisodes {
  id: string
  title: string
  members: string
  description: string
  thumbnail: string
  url: string,
  publishedAt: string
  durationAsString: string
  duration: number
}

export interface IHomeProps {
  latestEpisodes: Array<IEpisodes>
  allEpisodes: Array<IEpisodes>
}

export default function Home ({ latestEpisodes, allEpisodes }: IHomeProps) {
  const { play } = usePlayer()
  return (
    <>
      <Head>
        <title>Podcastr</title>
      </Head>
      <Container>
        <LatestEpisodes>
          <h2>Últimos lançamentos</h2>
          <ul>
            { latestEpisodes.map(episode => {
              return (
                <li key={ String(episode.id) }>
                  <Image
                    src={ episode.thumbnail }
                    alt={ episode.title }
                    title={ episode.title }
                    width={ 192 }
                    height={ 192 }
                    objectFit="cover"
                  />

                  <div className="episodeDetails">
                    <Link href={`/episodes/${episode.id}`}>
                     <a>{ episode.title }</a>
                    </Link>
                    <p>{ episode.members }</p>
                    <span>{ episode.publishedAt }</span>
                    <span>{ episode.durationAsString }</span>
                  </div>

                  <button onClick={ () => play(episode) }>
                    <img src="/play-green.svg" alt="Ouvir episódio" title="Ouvir episódio"/>
                  </button>
                </li>
              )
            }) }
          </ul>
        </LatestEpisodes>

        <AllEpisodes>
          <h2>Todos episódios</h2>

          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { allEpisodes.map(episode => {
                return (
                  <tr key={ String(episode.id) }>
                    <td style={{ width: 72 }}>
                      <Image
                        src={ episode.thumbnail }
                        width={ 120 }
                        height={ 120 }
                        alt={ episode.title }
                        title={ episode.title }
                        objectFit="cover"
                      />
                    </td>
                    <td>
                      <Link href={`/episodes/${episode.id}`}>
                        <a>{ episode.title }</a>
                      </Link>
                    </td>
                    <td>{ episode.members }</td>
                    <td style={{ width: 100 }}>{ episode.publishedAt }</td>
                    <td>{ episode.durationAsString }</td>
                    <td>
                      <button onClick={ () => play(episode) }>
                        <img src="/play-green.svg" alt="Tocar episódio" title="Tocar episódio"/>
                      </button>
                    </td>
                  </tr>
                )
              }) }
            </tbody>
          </table>
        </AllEpisodes>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map((episode: any) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      description: episode.description,
      url: episode.file.url,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      duration: Number(episode.file.duration)
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  }
}
