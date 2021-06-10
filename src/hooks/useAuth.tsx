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
  signIn: (data: signInData) => Promise<{ code: string; message: string }>
  signUp: (data: signUpData) => Promise<{ code: string; message: string }>
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
    const result = await auth
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

        return { code: '200', message: 'Registered successfully' }
      })
      .catch(({ code, message }) => {
        return { code, message }
      })

    return result
  }

  async function signIn({ email, password }: signInData) {
    const result = await auth
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

        return { code: '200', message: 'Login successfully completed' }
      })
      .catch(({ code, message }) => {
        return { code, message }
      })

    return result
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
