import Navigation from '@/components/Navigation'
import { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({nom: "", age: ""})

    const handleChange = (e) => {
        const { type, name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev, 
                    [name]: value
            }
        })
        console.log(formData)
    }

    return(
        <div>
            <Navigation />
            <div className="text-center">
                <div className="text-xl font-bold my-4">Formulaire</div>
                <label>Nom : </label>
                <input
                    type="text"
                    placeholder="Saisir votre nom..."
                    className="border border-black px-2 py-1 rounded"
                    name="nom"
                    value={formData.nom || " "}
                    onChange={handleChange}
                /><br /><br />

                <label>Age : </label>
                <input
                    type="text"
                    placeholder="Saisir votre nom..."
                    className="border border-black px-2 py-1 rounded"
                    name="age"
                    value={formData.age || " "}
                    onChange={handleChange}
                /><br />

                <button className="my-4 rounded bg-black text-white px-2 py-1" >Submit</button>
            </div>
        </div>
    )
}