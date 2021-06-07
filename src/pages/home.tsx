import Head from 'next/head'

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
