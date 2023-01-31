export async function getData(){
    const response = await fetch("http://localhost:3000/api")
    const json = await response.json()
    return json.map(movie => {
        const date = movie.date && movie.date.replaceAll("-","/")
        return {
          ...movie,
          date 
        }
      })
}