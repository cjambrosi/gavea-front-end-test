import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const Title = styled.h2`
  color: var(--navy-blue-800);
  font-family: var(--second-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 2.188rem;
  line-height: 2.625rem;
  margin-bottom: 1.938rem;

  .welcome-text {
    color: var(--orangey-600);
  }
`

export const ContentForm = styled.form`
  .input-block {
    & ~ .input-block {
      margin-top: 0.938rem;
    }
  }

  button {
    margin-top: 1.875rem;
  }
`
