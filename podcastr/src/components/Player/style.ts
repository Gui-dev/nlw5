import styled from 'styled-components'
import 'rc-slider/assets/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  padding: 3rem 4rem;
  width: 40rem;
  height: 100vh;
  background-color: var(--purple-500);

  header {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  strong {
    font-size: 1.6rem;
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  .emptyPlayer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem;
    width: 100%;
    height: 20rem;
    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    border: 1.5px dashed var(--purple-300);
    border-radius: 1.5rem;
  }
`

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    font-size: 1.4rem;
    font-family: Lexend, sans-serif;
    line-height: 1.75rem;
    color: var(--white);
    margin-top: -3rem;
  }

  p {
    display: block;
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    opacity: 0.6;
  }
`

export const Footer = styled.footer`
  align-self: stretch;

  &.empty {
    opacity: 0.5;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;

    span {
      display: inline-block;
      text-align: center;
      width: 4rem;
    }

    .slider {
      flex: 1;

      &.emptySlider {
        width: 100%;
        height: 4px;
        background-color: var(--purple-300);
        border-radius: 2px;
      }
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;

  button {
    font-size: 0;
    background: transparent;
    border: 0;
    transition: filter 0.2s;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.8);
    }

    &.playButton {
      width: 4rem;
      height: 4rem;
      background-color: var(--purple-400);
      border-radius: 1rem;

      &:hover:not(:disabled)  {
        filter: brightness(0.95);
      }
    }
  }
`
