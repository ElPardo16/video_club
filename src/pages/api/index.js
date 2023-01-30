import conn from "../../db/connection"
import { getMovie, saveMovie } from "../../controller/moviesController"
//maria models


export default async function handler(req, res) {
   conn()

   switch (req.method) {
      case "GET":
         try {
            const listMovie = await getMovie()
            return res.status(200).json(listMovie)

         } catch (error) {
            console.log(error)
            return res.status(400).json({
               msg: `Error: ${error.message}`
            })
         }

      case "POST":
         try {
            const movie = await saveMovie(req.body)
            return res.status(200).json({ msg: "Movie saved successfully", movie})

         } catch (error) {
            console.log(error)
            return res.status(400).json({
               msg: `Error: ${error.message}`
            })
         }
   }
}