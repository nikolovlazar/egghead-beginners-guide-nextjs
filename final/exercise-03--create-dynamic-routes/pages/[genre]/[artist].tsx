import { useRouter } from 'next/router'

const Artist = () => {
  const router = useRouter()
  const { genre, artist } = router.query

  return (
    <h2>
      {artist} is a {genre} music artist!
    </h2>
  )
}

export default Artist
