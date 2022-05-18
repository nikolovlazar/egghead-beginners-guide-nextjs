import type { AppProps } from 'next/app'
// ✍️ import the ChakraProvider from '@chakra-ui/react'

// ✍️ import the theme from the theme.ts file

const App = ({ Component, pageProps }: AppProps) => {
  // ✍️ wrap the Component with ChakraProvider and set its theme prop to theme
  return <Component {...pageProps} />
}

export default App
