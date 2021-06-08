import { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import Router from 'next/router'
import NProgress from 'nprogress'

import { GlobalStyle } from '../styles/globals'
import '/public/assets/icons/gavea-icons/style.css'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default MyApp
