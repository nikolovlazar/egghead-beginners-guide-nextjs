import type { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { ChakraProvider } from '@chakra-ui/react'

// ✍️ import the custom layout
import Layout from '../src/components/layout'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // ✍️ wrap the Component with the custom layout
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  )
}

export default App
