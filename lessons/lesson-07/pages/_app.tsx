import type { AppProps } from 'next/app'
// ✍️ import the ChakraProvider from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppProps) => {
  // ✍️ wrap the Component with ChakraProvider
  return <Component {...pageProps} />
}

export default App
