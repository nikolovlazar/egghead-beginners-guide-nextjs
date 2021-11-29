import Head from 'next/head'
import { ChakraProvider, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider>
      <Head>
        <title>My Next.js course</title>
        <meta
          name="description"
          content="An egghead.io course on how to get started with Next.js."
        />
      </Head>
      <Heading w="full" textAlign="center">
        This is our homepage content!
      </Heading>
    </ChakraProvider>
  )
}
export default Home
