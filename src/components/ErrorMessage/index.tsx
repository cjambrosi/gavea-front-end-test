import { useEffect, useState } from 'react'
import { MessageElement } from './styles'

interface ErrorMessageProps {
  code: string
}

export function ErrorMessage({ code }: ErrorMessageProps) {
  const TIME_OUT = 5000
  const [message, setMessage] = useState('')

  useEffect(() => {
    switch (code) {
      case 'auth/invalid-email':
        setMessage('Insira um email válido')
        break
      case 'auth/weak-password':
        setMessage('A senha deve possuir ao menos 6 carecteres')
        break
      case 'auth/length-name':
        setMessage('O nome deve possuir ao menos 4 carecteres')
        break
      case 'auth/same-passwords':
        setMessage('A senhas devem coincidir')
        break
      default:
        setMessage('')
        break
    }
  }, [code])

  useEffect(() => {
    const timer = setTimeout(() => setMessage(''), TIME_OUT)

    return () => {
      clearTimeout(timer)
    }
  }, [message])

  return <MessageElement>{message}</MessageElement>
}
