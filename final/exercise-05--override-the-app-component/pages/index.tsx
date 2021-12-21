type Props = {
  title: string
}

const Home = ({ title }: Props) => {
  return (
    <div>
      <h1>Overriding the App component</h1>
      <p>Title: {title}</p>
    </div>
  )
}

export default Home
