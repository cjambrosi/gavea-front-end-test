import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { CommoditiesTable } from '../components/CommoditiesTable'
import { DashboardHeader } from '../components/DashboardHeader'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Home - Gavea Marketplace</title>
      </Head>
      <DashboardHeader />
      <CommoditiesTable />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['gavea-token']: token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
