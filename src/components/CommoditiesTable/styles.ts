import styled from 'styled-components'

export const Table = styled.section`
  margin-top: -0.625rem;
`

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 0.8fr 0.9fr 1.2fr;
  grid-gap: 10px;
  align-items: center;
  margin-left: 0.938rem;
  margin-right: 0.625rem;
  margin-bottom: 4px;

  .text {
    font-family: var(--main-font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: var(--gray-400);

    &:first-child {
      text-align: center;
    }
  }
`

export const TableBody = styled.div`
  overflow: auto;
  height: 100vh;
  max-height: 405px;
  padding: 0 1.313rem;

  @media (min-height: 700px) {
    max-height: 455px;
  }

  @media (min-height: 810px) {
    max-height: 573px;
  }
`
