import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h2>My favorite music genres:</h2>
      <ul>
        <li>
          <Link href="/rock">Rock</Link>
        </li>
        <li>
          <Link href="/country">Country</Link>
        </li>
        <li>
          <Link href="/pop">Pop</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
