import styled from 'styled-components'

export const Container = styled.div`
  background: url('/assets/images/bakground-image.png') center;
  background-size: cover;
  height: 100vh;
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  .logo {
    transform: translateY(-30px);
  }
`

export const Content = styled.section`
  width: 100%;
`

export const Title = styled.h1`
  color: var(--white);
  font-family: var(--second-font-family);
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 120%;
  letter-spacing: -0.02em;
`

export const ButtonContainer = styled.div`
  margin-top: 2.813rem;

  button {
    & ~ button {
      margin-top: 0.938rem;
    }
  }
`
