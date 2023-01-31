import { useRef, useState, useEffect } from 'react'
import { MdMode, MdOutlineDelete, MdOutlineCheckCircleOutline } from 'react-icons/md'
import { getData } from '../utils/tools'
export default function Card({ movie: { _id, title, year, duration, languaje, date, country }, fun }) {
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
        console.log(paragraps);
        editable(true)
        window.getSelection().selectAllChildren(paragraps[0])
        window.getSelection().collapseToEnd();
        paragraps[0].focus()
    }
    const finishHandler = async _ => {
        editable(false)
        const data = {
            title:paragraps[0].textContent,
            year:paragraps[1].textContent,
            duration:paragraps[2].textContent,
            languaje:paragraps[3].textContent,
            date:paragraps[4].textContent,
            country:paragraps[5].textContent
        }
        try {
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
    return (
        <div ref={cardRef} className="card">
            <span>Titulo</span>
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