import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link href="/about">Go to About page</Link>
    </div>
  )
}

export default Home
