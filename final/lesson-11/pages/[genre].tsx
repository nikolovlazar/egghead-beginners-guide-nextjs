import type { GetStaticProps, GetStaticPaths } from 'next'
import { Container, Text, Heading } from '@chakra-ui/react'

type Props = {
  genre: string
  description: string
}

const Genre = ({ genre, description }: Props) => {
  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mb={4} textTransform="capitalize">
        {genre}
      </Heading>
      <Text>{description}</Text>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const genres = ['rock', 'country', 'pop']
  return {
    paths: genres.map((genre) => ({ params: { genre } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const genre = context.params?.['genre'] as string

  if (!genre) {
    return {
      notFound: true
    }
  }

  const data: Record<string, string> = {
    rock: 'Rock music is a broad genre of popular music that originated as "rock and roll" in the United States in the late 1940s and early 1950s.',
    country:
      'Country (also called country and western) is a genre of popular music that originated with blues, church music such as Southern gospel and spirituals, old-time, and American folk music forms.',
    pop: 'Pop is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom.'
  }

  const description = data[genre] ?? ''

  return {
    props: {
      genre,
      description
    }
  }
}

export default Genre
