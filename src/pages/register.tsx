import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { MainContent } from '../elements/MainContent'
import { Footer } from '../components/Footer'
import { SignUp } from '../components/SignUp'

export default function Register() {
  return (
    <div className="container">
      <Head>
        <title>Register - Gavea Marketplace</title>
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
