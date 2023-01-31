export async function getData(){
    const response = await fetch("https://video-club-grupo3.netlify.app/api")
    const json = await response.json()
    return json.map(movie => {
        const date = movie.date && movie.date.replaceAll("-","/")
        return {
          ...movie,
          date 
        }
      })
}