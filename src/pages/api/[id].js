import conn from "../../db/connection";
import { updateMovie, deleteMovie } from "../../controller/movieController";

export default async function handler(req, res) {
  const { id } = req.query
  const {body} = req
  conn();

  switch (req.method) {
    case "PUT":
      try {
        const update = await updateMovie(id, body);
        return res.status(200).json({
          msg: "Movie Actualizada",
          update,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          msg: `Error: ${error.message}`,
        });
      }

    case "DELETE":
      try {
        const deleted = await deleteMovie(id);
        return res.status(200).json({
          msg: "Borrada",
          deleted,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          msg: `Error: ${error.message}`,
        });
      }
  }
}
