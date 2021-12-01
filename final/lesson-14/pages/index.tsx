import Image from 'next/image'

import lazar from '../lazar.png'

const TWITTER_IMG_URL =
  'https://pbs.twimg.com/profile_images/1429088983577997325/Uex_c5Q9_400x400.jpg'

const Home = () => {
  return (
    <>
      <Image src={lazar} alt="Picture of Lazar" />
      <Image
        src={TWITTER_IMG_URL}
        alt="Remote picture of Lazar"
        width={250}
        height={250}
      />
    </>
  )
}

export default Home
