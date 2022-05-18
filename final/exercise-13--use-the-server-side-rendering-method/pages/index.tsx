import type { GetServerSideProps } from 'next'
import Link from 'next/link'
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
          <ListItem key={genre}>
            <Link href={`/${genre}`}>{genre}</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const genres = ['rock', 'country', 'pop']
  const search = context.query?.['search'] as string | undefined

  let filteredGenres: string[] = []
  if (search) {
    filteredGenres = genres.filter((genre) => genre.includes(search))
  } else {
    filteredGenres = genres
  }

  return {
    props: {
      genres: filteredGenres
    }
  }
}

export default Home
