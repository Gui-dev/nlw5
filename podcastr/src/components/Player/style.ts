import styled from 'styled-components'

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

  > div {
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

  footer {
    align-self: stretch;

    &.empty {
      opacity: 0.5;
    }
  }
`

export const Footer = styled.footer`
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

    &.playButton {
      width: 4rem;
      height: 4rem;
      background-color: var(--purple-400);
      border-radius: 1rem;
    }
  }
`
