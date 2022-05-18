import type { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

import Layout from '../src/components/layout'

const Home = () => {
  return (
    <Heading w="full" textAlign="center">
      This is our homepage content!
    </Heading>
  )
}

Home.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Home
