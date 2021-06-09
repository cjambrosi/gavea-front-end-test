import { render, screen } from '@testing-library/react'

import { Welcome } from '.'

describe('<Welcome />', () => {
  it('test title', () => {
    const { container } = render(<Welcome />)

    expect(
      screen.getByRole('heading', {
        name: /Bem-vindo a sua bolsa digital de commodities/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Button 1: should render the name correctly', () => {
    render(<Welcome />)

    const button = screen.getByRole('button', { name: /Entrar/i })
    expect(button).toBeInTheDocument()
  })

  it('Button 1: should render the colors correctly', () => {
    render(<Welcome />)

    const button = screen.getByRole('button', { name: /Entrar/i })
    expect(button).toHaveStyle(`
      background: var(--orangey-600)
      border: 1px solid var(--orangey-600)
      color: var(--white)
    `)
  })

  it('Button 2: should render the name correctly', () => {
    render(<Welcome />)

    const button = screen.getByRole('button', { name: /Criar Conta/i })
    expect(button).toBeInTheDocument()
  })

  it('Button 2: should render the colors correctly', () => {
    render(<Welcome />)

    const button = screen.getByRole('button', { name: /Entrar/i })
    expect(button).toHaveStyle(`
      background: var(--transparent)
      border: 1px solid var(--white)
      color: var(--white)
    `)
  })
})
