import { useRouter } from 'next/router'
import Link from 'next/link'

const Genre = () => {
  const router = useRouter()
  const { genre } = router.query

  return (
    <>
      <h2>I like {genre} music!</h2>
      <div>
        <Link href="/">Back</Link>
      </div>
    </>
  )
}

export default Genre
