import { ReactNode } from 'react'
import { Main } from './styles'

interface MainContentProps {
  children: ReactNode
  // alignJustify: string
}

export function MainContent({ children }: MainContentProps) {
  // return <Main alignJustify={alignJustify}>{children}</Main>
  return <Main>{children}</Main>
}
