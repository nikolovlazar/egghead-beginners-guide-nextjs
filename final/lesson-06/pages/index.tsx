import Button from '../src/components/button/button'

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        rowGap: '24px',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h3>My App</h3>
      <Button />
    </div>
  )
}

export default Home
