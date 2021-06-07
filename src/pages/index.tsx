import Head from 'next/head'
import { Welcome } from '../components/Welcome'

export default function Home() {
  return (
    <div className="teste">
      <Head>
        <title>Gavea Marketplace</title>
      </Head>
      <Welcome />
    </div>
  )
}
