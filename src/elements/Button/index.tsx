import { ButtonElement } from './styles'

interface ButtonProps {
  typeButton: 'button' | 'submit'
  text: string
  backgroundColor: string
  borderColor: string
  textColor: string
  handleRedirectTo?: () => void
}

export function Button({
  typeButton,
  text,
  backgroundColor,
  borderColor,
  textColor,
  handleRedirectTo
}: ButtonProps) {
  return (
    <ButtonElement
      type={typeButton}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      onClick={handleRedirectTo}
    >
      <span className="s-text">{text}</span>
    </ButtonElement>
  )
}
