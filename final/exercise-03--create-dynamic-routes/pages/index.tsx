import Link from 'next/link'

const Home = () => {
  const songs = ['rock', 'country', 'pop']
  const artistsNSongs = [
    { artistName: 'Michael Jackson', song: 'Soul' },
    { artistName: 'Whitney Houston', song: 'RNB' },
    { artistName: 'Taylor Swift', song: 'Pop' }
  ]
  return (
    <div>
      <h2>My favorite music genres are :</h2>
      <ul>
        {songs.map((song) => (
          <li key={song}>
            <Link href={`/${song}`}>{song}</Link>
          </li>
        ))}
      </ul>
      <h2>My favorite artists and their most popular genres</h2>
      <ul>
        {artistsNSongs.map((artistNSong) => (
          <li key={artistNSong.artistName}>
            <Link href={`/${artistNSong.song}/${artistNSong.artistName}`}>
              <a>
                {artistNSong.artistName} - {artistNSong.song}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
