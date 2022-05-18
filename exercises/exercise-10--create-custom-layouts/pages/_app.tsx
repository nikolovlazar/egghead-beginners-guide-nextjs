import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// ✍️ import the custom layout

const App = ({ Component, pageProps }: AppProps) => {
  // ✍️ wrap the Component with the custom layout
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
