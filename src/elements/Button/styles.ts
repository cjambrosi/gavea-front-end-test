import styled from 'styled-components'

interface ButtonElementProps {
  backgroundColor: string
  borderColor: string
  textColor: string
}

const btnBackgroundColor = (props) =>
  props.backgroundColor ? props.backgroundColor : '--transparent'

const btnBorderColor = (props) =>
  props.borderColor ? props.borderColor : '--transparent'

const spnTextColor = (props) => (props.textColor ? props.textColor : '--white')

export const ButtonElement = styled.button<ButtonElementProps>`
  background: var(${btnBackgroundColor});
  width: 100%;
  height: 3.438rem;
  border: 1px solid var(${btnBorderColor});
  border-radius: 0.25rem;

  .s-text {
    color: var(${spnTextColor});
    font-size: 0.938rem;
    text-transform: capitalize;
  }
`
