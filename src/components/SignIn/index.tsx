import { Button } from '../../elements/Button'
import { Input } from '../../elements/Input'
import { Wrapper, Title, ContentForm } from './styles'

export function SignIn() {
  return (
    <>
      <Wrapper>
        <Title>
          <p className="welcome-text">Olá!</p>
          Seja bem-vindo.
        </Title>

        <ContentForm>
          <div className="input-block">
            <Input type="email" placeholder="Email" leftIcon="icon-email" />
          </div>
          <div className="input-block">
            <Input
              type="password"
              placeholder="Senha"
              leftIcon="icon-password"
              rigthIcon={true}
            />
          </div>

          <Button
            text="Entrar"
            textColor="--white"
            backgroundColor="--orangey-600"
            borderColor="--orangey-600"
          />
        </ContentForm>
      </Wrapper>
    </>
  )
}
