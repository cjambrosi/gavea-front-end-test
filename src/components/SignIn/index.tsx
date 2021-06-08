import { useState, FormEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../../elements/Button'
import { Input } from '../../elements/Input'

import { Wrapper, Title, ContentForm } from './styles'

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault()

    signIn({ email, password })
  }

  return (
    <>
      <Wrapper>
        <Title>
          <p className="welcome-text">Olá!</p>
          Seja bem-vindo.
        </Title>

        <ContentForm onSubmit={handleSignIn}>
          <div className="input-block">
            <Input
              type="email"
              name="email-field"
              value={email}
              placeholder="Email"
              leftIcon="icon-email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-block">
            <Input
              type="password"
              name="password-field"
              value={password}
              placeholder="Senha"
              leftIcon="icon-password"
              rigthIcon={true}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <Button
            typeButton="submit"
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
