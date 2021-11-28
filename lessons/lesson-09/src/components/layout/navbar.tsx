import { HStack, Container, Heading, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW="container.xl" centerContent py={6}>
      <HStack w="full" justifyContent="space-between">
        <Heading>Next.js</Heading>
        <Button>Log in</Button>
      </HStack>
    </Container>
  )
}

export default Navbar
