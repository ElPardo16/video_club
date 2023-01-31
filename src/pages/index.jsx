import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import { getData } from '../utils/tools'


export default function Home({ listMovies }) {
  const [moviesState, setMovies] = useState(listMovies)
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
        <Form fun={setMovies}/>
        <div className="table">
          {moviesState.map(movie => <Card key={movie._id} movie={movie} fun={setMovies} />)}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const jsonMovies = await getData()

    return {
      props: {
        listMovies: jsonMovies
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
