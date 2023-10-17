import Form from '../components/Form'

const Home: React.FC<{ count: number }> = (props) => {
  const count = props.count

  if (count > 3) {
    throw new Error(`This error is intentional`)
  }

  return (
    <main
      style={{ border: 'solid 1px white', padding: '10px', margin: '30px' }}
    >
      Home {<Form />}
    </main>
  )
}

export default Home
