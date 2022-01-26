// ✍️ import GetStaticProps from 'next'
import { List, ListItem, Container, Heading } from '@chakra-ui/react'

type Props = {
  genres: string[]
}

const Home = ({ genres }: Props) => {
  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mb={4}>Genres:</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre}>{genre}</ListItem>
        ))}
      </List>
    </Container>
  )
}

// ✍️ export the getStaticProps method and return an array of genres as props

export default Home
