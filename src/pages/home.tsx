import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { CommoditiesTable } from '../components/CommoditiesTable'
import { DashboardHeader } from '../components/DashboardHeader'

interface Dashboard {
  name: string
}

export default function Dashboard({ name }: Dashboard) {
  return (
    <>
      <Head>
        <title>Home - Gavea Marketplace</title>
      </Head>
      <DashboardHeader userName={name} />
      <CommoditiesTable />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['gavea-token']: token } = parseCookies(context)
  const { ['gavea-username']: name } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      name
    }
  }
}
