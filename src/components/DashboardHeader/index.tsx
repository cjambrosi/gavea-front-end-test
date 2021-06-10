import { useEffect, useState } from 'react'
import { Logo } from '../../elements/Logo'
import { Header, Card, Avatar, UserInfo } from './styles'

interface DashboardHeaderProps {
  userName: string
}

const replacedUserName = function (name: string) {
  let shortName = ''
  if (name !== '') {
    shortName = name.split(' ')[0].substring(0, 2)
  }

  return shortName
}

const replacedFirstName = function (name: string) {
  let firstName = ''
  if (name !== '') {
    firstName = name.split(' ')[0]
  }

  return firstName
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  const [shortName, setShortName] = useState('')
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    setShortName(replacedUserName(userName))
    setFirstName(replacedFirstName(userName))
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
          <p className="text-name">Olá, {firstName}</p>
          <p className="text-info">Gavea Marketplace</p>
        </UserInfo>
      </Card>
    </>
  )
}
