import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 10.4rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`

export const LatestEpisodes = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    list-style: none;

    li {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1.25rem;
      background-color: var(--white);
      border: 1px solid var(--gray-100);
      border-radius: 1.5rem;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
      }

      .episodeDetails {
        flex: 1;
        margin-left: 1rem;

        a {
          display: block;
          font-size: 1.6rem;
          font-weight: 600;
          font-family: Lexend, sans-serif;
          text-decoration: none;
          line-height: 1.4rem;
          color: var(--gray-800);

          &:hover {
            text-decoration: underline;
          }
        }

        p {
          font-size: 1rem;
          text-overflow: ellipsis;
          max-width: 70%;
          margin-top: 0.5rem;
          overflow: hidden;
          white-space: nowrap;
        }

        span {
          display: inline-block;
          font-size: 1.3rem;
          margin-top: 0.5rem;

          &:last-child {
            position: relative;
            margin-left: 0.5rem;
            padding-left: 0.5rem;

            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              width: 4px;
              height: 4px;
              background-color: #DDD;
              border-radius: 2px;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      button {
        position: relative;
        right: 2rem;
        bottom: 2rem;
        font-size: 0;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.675rem;
        transition: filter 0.2s;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th, td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
    }

    th {
      font-size: 1.1rem;
      font-family: Lexend, sans-serif;
      font-weight: 500;
      text-align: left;
      text-transform: uppercase;
      color: var(--gray-200);
    }

    td {
      font-size: 1.3rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
      }

      a {
        font-size: 1.4rem;
        font-family: Lexend, sans-serif;
        font-weight: 600;
        line-height: 1.4rem;
        text-decoration: none;
        color: var(--gray-800);

        &:hover {
          text-decoration: underline
        }
      }

      button {
        font-size: 0;
        width: 2rem;
        height: 2rem;
        background-color: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.5rem;
        transition: filter 0.2s;

        img {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`
