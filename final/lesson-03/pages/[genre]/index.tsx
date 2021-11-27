import { useRouter } from 'next/router'

const Genre = () => {
  const router = useRouter()
  const { genre } = router.query

  return <h2>I like {genre} music!</h2>
}

export default Genre
