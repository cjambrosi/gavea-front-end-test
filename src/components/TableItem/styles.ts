import styled from 'styled-components'

interface ItemProps {
  operation: string
}

export const Item = styled.div<ItemProps>`
  display: grid;
  grid-template-columns: 2.5fr repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  padding-left: 0.938rem;
  padding-right: 0.625rem;

  &.item-table {
    background: var(--white);
    height: 50px;
    border: 1px solid var(--gray-100);
    border-radius: 0.25rem;
    position: relative;
    box-shadow: 0px 17px 60px rgba(45, 76, 113, 0.07),
      0px 3.79717px 13.4018px rgba(45, 76, 113, 0.0417275),
      0px 1.13052px 3.99006px rgba(45, 76, 113, 0.0282725);

    & ~ .item-table {
      margin-top: 0.5rem;
    }

    &::after {
      content: '';
      height: 100%;
      border-radius: 4px 0px 0px 4px;
      width: 5px;
      position: absolute;
      left: -1px;
      background: var(
        ${({ operation }) =>
          operation === 'increased' ? '--green-400' : '--red-400'}
      );
    }

    .flex-info {
      display: flex;
      align-items: center;

      .image {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }

    .text {
      color: var(--gray-700);
      font-family: var(--main-font-family);
      font-style: normal;
      font-weight: 400;
      font-size: 0.938rem;
      line-height: 107.6%;
    }

    .operation {
      color: var(
        ${({ operation }) =>
          operation === 'increased' ? '--green-400' : '--red-400'}
      );
    }
  }
`
