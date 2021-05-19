import styled from 'styled-components'

export const Container = styled.article`
  max-width: 70rem;
  height: calc(100vh - 10.4rem);
  padding: 3rem 2rem;
  margin: 0 auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .4rem;               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: var(--gray-200);        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--purple-300);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 1px solid var(--purple-800);  /* creates padding around scroll thumb */
  }
`

export const ThumbnailContainer = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }

  button {
    position: absolute;
    font-size: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    border: 0;
    transition: filter 0.2s;
    z-index: 2;

    &:first-child {
      top: 50%;
      left: 0;
      background-color: var(--purple-500);
      transform: translate(-50%, -50%);
    }

    &:last-child {
      top: 50%;
      right: 0;
      background-color: var(--green-500);
      transform: translate(50%, -50%);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Header = styled.header`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);

  h1 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  span {
    display: inline-block;
    font-size: 1.2rem;

    & + span {
      position: relative;
      margin-left: 1rem;
      padding-left: 1rem;

      &:before {
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
`

export const Description = styled.div`
  line-height: 1.675rem;
  color: var(--gray-800);
  margin-top: 2rem;

  p {
    font-size: 1.6rem;
    margin: 1.5rem 0;
  }
`
