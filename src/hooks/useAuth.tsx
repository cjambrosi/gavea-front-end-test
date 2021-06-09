import { createContext, useState, ReactNode, useContext } from 'react'
import { setCookie } from 'nookies'
import { auth } from '../libs/firebase'

import Router from 'next/router'

type User = {
  name: string
  email: string
  password?: string
  refreshToken: string
}

type signUpData = Omit<User, 'refreshToken'>

type signInData = Omit<User, 'refreshToken' | 'name'>

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: signInData) => Promise<void>
  signUp: (data: signUpData) => Promise<void>
}

interface AuthContextProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthContextProps) {
  const COOKIE_MAX_AGE = 60 * 5 // 5 min

  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  async function signUp({ name, email, password }: signUpData) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const { email, refreshToken } = userCredential.user

        user.updateProfile({
          displayName: name
        })

        setCookie(undefined, 'gavea-token', refreshToken, {
          maxAge: COOKIE_MAX_AGE
        })

        setCookie(undefined, 'gavea-username', name, {
          maxAge: COOKIE_MAX_AGE
        })

        setUser({ name, email, refreshToken })

        Router.push('/home')
      })
      .catch(({ code, message }) => {
        console.log(`Usuário não cadastro. ${code} - ${message}`)
      })
  }

  async function signIn({ email, password }: signInData) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { displayName: name, email, refreshToken } = userCredential.user

        setCookie(undefined, 'gavea-token', refreshToken, {
          maxAge: COOKIE_MAX_AGE
        })

        setCookie(undefined, 'gavea-username', name, {
          maxAge: COOKIE_MAX_AGE
        })

        setUser({ name, email, refreshToken })

        Router.push('/home')
      })
      .catch(({ code, message }) => {
        console.log(`Não foi possível efetuar o login. ${code} - ${message}`)
      })
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
