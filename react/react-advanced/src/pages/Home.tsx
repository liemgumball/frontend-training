const Home: React.FC<{ count: number }> = (props) => {
  const count = props.count

  if (count > 3) {
    throw new Error(`This error is intentional`)
  }
  return <main>Home</main>
}

Home.whyDidYouRender = { customName: 'Home', logOnDifferentValues: true }

export default Home
