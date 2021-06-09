import { useEffect, useState } from 'react'
import { Logo } from '../../elements/Logo'
import { Header, Card, Avatar, UserInfo } from './styles'

interface DashboardHeaderProps {
  userName: string
}

const replacedUserName = (name) => name.substring(0, 2)

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  const [shortName, setShortName] = useState()

  useEffect(() => {
    setShortName(replacedUserName(userName))
  }, [userName])

  return (
    <>
      <Header>
        <Logo className="logo" />
      </Header>
      <Card>
        <Avatar>
          <span className="text">{shortName}</span>
        </Avatar>
        <UserInfo>
          <p className="text-name">Olá, {userName}</p>
          <p className="text-info">Gavea Marketplace</p>
        </UserInfo>
      </Card>
    </>
  )
}
