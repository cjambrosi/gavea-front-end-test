import { useRouter } from 'next/router'

import { Button } from '../../elements/Button'
import { Logo } from '../../elements/Logo'

import { Container, Content, Title, ButtonContainer } from './styles'

export function Welcome() {
  const router = useRouter()

  const handleRedirectToLogin = () => {
    router.push('/login')
  }

  const handleRedirectToRegister = () => {
    router.push('/register')
  }

  return (
    <Container>
      <Logo className="logo" />
      <Content>
        <Title>
          Bem-vindo a <br />
          sua bolsa digital <br />
          de commodities
        </Title>
        <ButtonContainer>
          <Button
            text="Entrar"
            backgroundColor="--orangey-600"
            borderColor="--orangey-600"
            textColor="--white"
            handleRedirectTo={handleRedirectToLogin}
          />

          <Button
            text="Criar conta"
            backgroundColor="--transparent"
            borderColor="--white"
            textColor="--white"
            handleRedirectTo={handleRedirectToRegister}
          />
        </ButtonContainer>
      </Content>
    </Container>
  )
}
