import { ReactNode } from 'react'
import { Main } from './styles'

interface MainContentProps {
  children: ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return <Main>{children}</Main>
}
