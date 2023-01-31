# CRUD de Pelicula con Backend 


Esta aplicación es una CRUD de peliculas que implementa un backend para leer, crear, modificar y eliminar las películas que tienen en su base de datos.

## Tecnologías


Las tecnologías que usamos para desarrollar el proyecto fueron:


- React - Librería diseño de interfaces
- NextJS - Framework Fullstack de React
- MongoDB - Bases de Datos
- Mongoose - ORM para mongo
- Express - Servidor http
- Netlify - Despliegue
- Postman - Testeo de API rest 
- Redux  - Librería para manejar el estado global 

## Consumo de la API

Para realizar las peticiones GET, POST, DELETE, PUT, se creó un EndPoint <code>/api/ </code>, Además se hizo uso de la función fetch en combinación de una función propia de Next llamada <code>GetServerSideProps </code>, para generar un sitio estatico que tiene un mejor performance.

export async function getServerSideProps() {
  try {
    const json = await getData()
    return {
      props: {
        listTask: json
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        listTask: []
      }
    }
  }
}

Metodo PUT
  const res = await fetch(`/api/${_id}`,{
                method:'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await res.json()
            console.log(json);
            
            fun(await getData())
        } catch (error) {
            console.log(error);
        }
    }
    
    Metodo DELETE
    const deleteHandler = async _  =>  {
        try {
            const res = await fetch(`/api/${_id}`, {
                method: "DELETE"
            } )
            const json = await res.json()
            console.log(json)
            fun(await getData())
        } catch (error) {
            console.log(error)
        }
     }
     
     ## MONGOOSE

Usamos mongoose para el modelado de datos y para realizar las operaciones del CRUD.

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    languaje: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      required: true,
    },
  },

  {
    versionKey: false,
  }
);

Ejemplo de como obtenemos los datos de nuestra Data base: 

 Movie.find()

