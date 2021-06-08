import { useState, FormEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'

import { Button } from '../../elements/Button'
import { Input } from '../../elements/Input'
import { Wrapper, Title, ContentForm } from './styles'

export function SignUp() {
  const { signUp } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateNewUser = async (event: FormEvent) => {
    event.preventDefault()

    signUp({ name, email, password })
  }

  return (
    <Wrapper>
      <Title>Criar Conta</Title>

      <ContentForm onSubmit={handleCreateNewUser}>
        <div className="input-block">
          <Input
            type="text"
            name="name-field"
            value={name}
            placeholder="Nome completo"
            leftIcon="icon-person"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

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

        <div className="input-block">
          <Input
            type="password"
            name="confirm-passowrd-field"
            value={password}
            placeholder="Confirmar Senha"
            leftIcon="icon-password"
            rigthIcon={true}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Button
          typeButton="submit"
          text="Cadastrar"
          textColor="--white"
          backgroundColor="--orangey-600"
          borderColor="--orangey-600"
        />
      </ContentForm>
    </Wrapper>
  )
}
