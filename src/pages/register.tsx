import Head from 'next/head'
import { MainContent } from '../elements/MainContent'
import { Footer } from '../components/Footer'
import { SignUp } from '../components/SignUp'

export default function Register() {
  return (
    <div className="container">
      <Head>
        <title>Cadastro - Gavea Marketplace</title>
      </Head>
      <MainContent>
        <SignUp />
      </MainContent>
      <Footer
        textInfo="Já tem uma conta?"
        urlLing="/login"
        textLink="Faça o login"
      />
    </div>
  )
}
