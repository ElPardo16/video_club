import Movie from "../models/Movie"

export const getMovie = async _ => await Movie.find()

export const saveMovie = async dataMovie => {
    const movie = new Movie(dataMovie)
    return await movie.save()
}

//find(), es una funcion que recuperará todos los documentos detallados presentes en la colección
export const deleteMovie = async id => await Movie.findByIdAndDelete(id)


export const updateMovie = async (id,dataMovie) => {
    return await Movie.findByIdAndUpdate(id, dataMovie, {new:true})
}
