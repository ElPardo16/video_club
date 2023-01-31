import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'


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
        <Form/>
        <div className="table">
          {moviesState.map(movie => <Card key={movie._id} movie={movie} />)}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api")
    const json = await response.json()
    const movies = json.map(movie => {
      const date = movie.date && movie.date.replaceAll("-","/")
      return {
        ...movie,
        date 
      }
    })
    return {
      props: {
        listMovies: movies
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
