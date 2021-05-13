import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  height: 10.4rem;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-100);

  p {
    font-size: 1.6rem;
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);
  }

  span {
    font-size: 1.6rem;
    margin-left: auto;
    text-transform: capitalize;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;

    p {
      font-size: 1.6rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0;
      margin-left: 0;
      border: 0;
    }

    span {
      display: block;
      font-size: 1.6rem;
      margin-left: 0;
      text-transform: capitalize;
    }
  }
`
