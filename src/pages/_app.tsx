import { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/globals'
import '/public/assets/icons/gavea-icons/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
