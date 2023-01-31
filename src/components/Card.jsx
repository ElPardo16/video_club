import { useRef, useState, useEffect } from 'react'
import { MdMode, MdOutlineDelete, MdOutlineCheckCircleOutline } from 'react-icons/md'
export default function Card({ movie: { _id, title, year, duration, languaje, date, country } }) {
    const [edit, setEdit] = useState(false)
    const [paragraps, setParagraps] = useState()
    const cardRef = useRef(null)

    useEffect(_ => { setParagraps(Array.from(cardRef.current.getElementsByTagName("p"))) }, [])

    const editable = editBool => {
        paragraps.forEach(item => {
            item.contentEditable = editBool
            item.classList.toggle("edit")
        })
        setEdit(!edit)
    }
    const editHandler = _ => {
        editable(true)
        window.getSelection().selectAllChildren(paragraps[0])
        window.getSelection().collapseToEnd();
        paragraps[0].focus()
    }
    const finishHandler = _ => {
        editable(false)
    }

    const deleteHandler = async _  =>  {
        try {
            const res = await fetch(`/api/${_id}`, {
                method: "DELETE"
            } )
            const json = await res.json()
            console.log(json)
        } catch (error) {
            console.log(error)
        }
        


     }
    return (
        <div ref={cardRef} className="card">
            <span>Titilo</span>
            <p>{title}</p>
            <span>Año</span>
            <p>{year}</p>
            <span>Duracion</span>
            <p>{duration}</p>
            <span>Lenguage</span>
            <p>{languaje}</p>
            <span>Fecha</span>
            <p>{date ?? "Vacio"}</p>
            <span>Pais</span>
            <p>{country}</p>
            <span>Administrar</span>
            <div className="btns">
                {!edit ? <MdMode size={30} onClick={editHandler} /> :
                        <MdOutlineCheckCircleOutline size={30} onClick={finishHandler} />}
                <MdOutlineDelete size={30} onClick={deleteHandler} />
            </div>
        </div>
    )
}