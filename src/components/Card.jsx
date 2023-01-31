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
    return (
        <div ref={cardRef} className="card">
            <span>Titilo</span>
            <span>Año</span>
            <span>Duracion</span>
            <span>Lenguage</span>
            <span>Fecha</span>
            <span>Pais</span>
            <span>Administrar</span>
            <p>{title}</p>
            <p>{year}</p>
            <p>{duration}</p>
            <p>{languaje}</p>
            <p>{date ?? "Vacio"}</p>
            <p>{country}</p>
            <div className="btns">
                {!edit ? <MdMode size={30} onClick={editHandler} /> :
                        <MdOutlineCheckCircleOutline size={30} onClick={finishHandler} />}
                <MdOutlineDelete size={30} onClick={editHandler} />
            </div>
        </div>
    )
}