import { Logo } from '../../elements/Logo'
import { Header, Card, Avatar, UserInfo } from './styles'

export function DashboardHeader() {
  return (
    <>
      <Header>
        <Logo className="logo" />
      </Header>
      <Card>
        <Avatar>
          <span className="text">Fr</span>
        </Avatar>
        <UserInfo>
          <p className="text-name">Olá, Francisco</p>
          <p className="text-info">Gavea Marketplace</p>
        </UserInfo>
      </Card>
    </>
  )
}
