import { ButtonElement } from './styles'

interface ButtonProps {
  text: string
  backgroundColor: string
  borderColor: string
  textColor: string
  handleRedirectTo: () => void
}

export function Button({
  text,
  backgroundColor,
  borderColor,
  textColor,
  handleRedirectTo
}: ButtonProps) {
  return (
    <ButtonElement
      type="button"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      onClick={handleRedirectTo}
    >
      <span className="s-text">{text}</span>
    </ButtonElement>
  )
}
