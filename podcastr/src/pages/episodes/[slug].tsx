import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../services/api'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import { usePlayer } from '../../context/PlayerContext'
import { Container, ThumbnailContainer, Header, Description } from './style'

interface IContextParams extends ParsedUrlQuery {
  slug: string
}

interface IEpisode {
  id: string
  title: string
  thumbnail: string
  members: string
  description: string
  url: string
  publishedAt: string
  durationAsString: string
  duration: number
}

interface IEpisodeProps {
  episode: IEpisode
}

const Episode = ({ episode }: IEpisodeProps) => {
  const { play } = usePlayer()

  return (
    <Container>
      <Head>
        <title>Podcastr - { episode.title }</title>
      </Head>
      <ThumbnailContainer>
        <Link href="/">
          <button>
            <img src="/arrow-left.svg" alt="Voltar á página aterior" title="Voltar" />
          </button>
        </Link>

        <Image
          src={ episode.thumbnail }
          width={ 700 }
          height={ 160 }
          objectFit="cover"
        />

        <button onClick={ () => play(episode) }>
          <img src="/play.svg" alt="Tocar episódio" title="Tocar" />
        </button>
      </ThumbnailContainer>

      <Header>
        <h1>{ episode.title }</h1>
        <span>{ episode.members }</span>
        <span>{ episode.publishedAt }</span>
        <span>{ episode.durationAsString }</span>
      </Header>

      <Description dangerouslySetInnerHTML={{ __html: episode.description }}/>
    </Container>
  )
}

export default Episode

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map((episode: IEpisode) => {
    return {
      params: {
        slug: episode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IContextParams
  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    description: data.description,
    url: data.file.url,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    duration: Number(data.file.duration)
  }

  return {
    props: {
      episode
    }
  }
}
