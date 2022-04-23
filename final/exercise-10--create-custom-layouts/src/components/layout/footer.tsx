import { Container, SimpleGrid, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container
      maxW="container.xl"
      centerContent
      py={6}
      mt={12}
      borderTop={1}
      borderTopColor="gray.200"
      borderTopStyle="solid"
    >
      <SimpleGrid columns={3} w="full">
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
      </SimpleGrid>
    </Container>
  )
}

export default Footer
