import Navigation from '@/components/Navigation'
import { useState } from 'react'
import General from '../../styles/General.module.css'

export default function ToDo() {
    const [valeur, setValeur] = useState('')
    const [task, setTask] = useState([])

    const handleInput = (e) => {
        setValeur(e.target.value)
    }

    const handleAdd = () => {
        setTask((prev) => {
            return [...prev, {id:task.length+1 , tache: valeur}]
        })
        setValeur("")
    }

    const deleteTask = (id) => {
        const newTask = task.filter((item) => item.id != id)
        setTask(newTask)
    }

    return(
        <div>
            <Navigation />
            <div className={`${General.page}`}>
                <div className="text-xl font-bold mt-10 mb-2">To Do List</div>
                <div className="bg-gray-200 text-left p-4">
                    <div className="text-lg font-bold">Ajouter une tâche</div>
                    <input value={valeur} onChange={handleInput} placeholder="Une nouvelle tache..." className="px-2 py-1 my-2 border border-black rounded" />
                    {valeur && 
                    <button onClick={handleAdd} className="bg-black mx-1 px-2 py-1 text-white rounded font-medium">Ajouter</button>
                    }
                    <div className="my-4" >
                        <div className="text-lg font-bold">Liste des tâches</div>
                        <ul className="mx-4">
                            {task.length == 0 ? 
                            <div className="text-lg">Pas encore de taf</div>
                            : task.map((taf) => {
                                return <li key={taf.id} className="font-medium my-2">
                                    -   {taf.tache} 
                                    <button onClick={() => deleteTask(taf.id)} className="bg-black mx-1 px-2 py-1 text-white rounded">Supprimer</button>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}