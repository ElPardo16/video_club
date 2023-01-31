import Head from 'next/head'
import Card from '../components/Card'
import Form from '../components/Form'


export default function Home({ listMovies }) {
  return (
    <>
      <Head>
        <title>Movie Club</title>
        <meta name="description" content="Movies club CRUD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Movie Club</header>
      <main>
        <h1>Peliculas</h1>
        <Form/>
        <div className="table">
          {listMovies.map(movie => <Card key={movie._id} movie={movie} />)}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api")
    const json = await response.json()
    return {
      props: {
        listMovies: json
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        listMovies: []
      }
    }
  }
}
