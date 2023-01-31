import { useState } from "react"
import { getData } from "../utils/tools"

export default function Form({fun}) {
    const [data, setData] = useState({
        title: "",
        year: "",
        duration: "",
        languaje: "",
        date: "",
        country: ""
    })
    const changueHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async _ => {
        try {
            const res = await fetch('/api',{
                method:'POST',
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

    return (
        <div className="add">
            <input type="text" name="title" placeholder='Titulo' onChange={changueHandler} value={data.title} />
            <input type="number" name="year" placeholder='Año' onChange={changueHandler} value={data.year} />
            <input type="number" name="duration" placeholder='Duracion' onChange={changueHandler} value={data.duration} />
            <input type="text" name="languaje" placeholder='Lenguaje' onChange={changueHandler} value={data.languaje} />
            <input type="date" name="date" placeholder='Fecha' onChange={changueHandler} value={data.date} />
            <input type="text" name="country" placeholder='Pais' onChange={changueHandler} value={data.country} />
            <button onClick={handleSubmit}>Agregar</button>
        </div>
    )
}