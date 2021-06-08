import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { MainContent } from '../elements/MainContent'
import { Footer } from '../components/Footer'
import { SignIn } from '../components/SignIn'

export default function Login() {
  return (
    <div className="container">
      <Head>
        <title>Login - Gavea Marketplace</title>
      </Head>
      <MainContent>
        <SignIn />
      </MainContent>
      <Footer
        textInfo="Não tem uma conta?"
        urlLing="/register"
        textLink="Criar conta"
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['gavea-token']: token } = parseCookies(context)

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
