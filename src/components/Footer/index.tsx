import Link from 'next/link'

import { FooterContainer, Text, TextLink } from './styles'

interface FooterProps {
  textInfo: string
  urlLing: string
  textLink: string
}

export function Footer({ textInfo, urlLing, textLink }: FooterProps) {
  return (
    <FooterContainer>
      <Text>{textInfo}</Text>
      <Link href={urlLing}>
        <TextLink>{textLink}</TextLink>
      </Link>
    </FooterContainer>
  )
}
