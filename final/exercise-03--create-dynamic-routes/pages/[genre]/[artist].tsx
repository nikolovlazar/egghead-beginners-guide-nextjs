import { useRouter } from 'next/router'
import Link from 'next/link'

const Artist = () => {
  const router = useRouter()
  const { genre, artist } = router.query

  return (
    <>
      <h2>
        {artist} is a {genre} music artist!
      </h2>
      <div>
        <Link href="/">Back</Link>
      </div>
    </>
  )
}

export default Artist
