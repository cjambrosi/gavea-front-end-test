import styled from 'styled-components'

export const InputBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputElement = styled.input`
  background: var(--white);
  color: var(--gray-600);
  font-family: var(--main-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 107.6%;
  border: 1px solid var(--gray-100);
  border-radius: 0.25rem;
  width: 100%;
  height: 3.438rem;
  padding: 0 54px;

  &::placeholder {
    color: var(--gray-400);
  }
`

export const Icon = styled.i`
  font-size: 1rem;
  position: absolute;
  z-index: 5;

  &.icon {
    left: 20px;

    & ~ .icon {
      cursor: pointer;
      left: auto;
      right: 20px;
    }
  }
`
