import { Container, HStack, Box, Heading, Button } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box bg="purple.500" w="full" py={4}>
      <Container maxW="container.xl">
        <HStack justifyContent="space-between">
          <Heading color="white" size="md">
            Next Shop
          </Heading>
          <Button bg="white" color="purple.500">
            Log in
          </Button>
        </HStack>
      </Container>
    </Box>
  )
}

export default Home
