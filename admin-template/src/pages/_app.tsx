import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { AppContextProvider, AuthContextProvider } from '../data'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
