import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <h2>Hello 👋</h2>
      <p>My name is Lazar Nikolov</p>
      <Image src="/lazar.png" alt="Lazar Nikolov" width="250" height="250" />
    </div>
  )
}

export default Home
