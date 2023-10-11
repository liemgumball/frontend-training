const Home: React.FC<{ count: number }> = (props) => {
  const count = props.count

  if (count > 3) {
    throw new Error(`This error is intentional`)
  }
  return <main>Home</main>
}

export default Home
