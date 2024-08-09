import Navigation from '@/components/Navigation'
import Player from '@/components/Player'
import { useEffect, useState } from 'react'
import General from '../styles/General.module.css'

export default function Home() {
  const [data, setData] = useState("Rakoto")
  const [joueur, setJoueur] = useState([])

  useEffect(() => {
    handlePlayer()
  },[])
  const values = [
    {
      numero: 7,
      name: "Cristiano Ronaldo",
    },
    {
      numero: 10,
      name: "Lionel Messi",
    },
    {
      numero: 11,
      name: "Neymar Junior",
    },
    {
      numero: 4,
      name: "Sergio Ramos",
    },
  ]

  const handlePlayer = () => {
    setJoueur(values)
  }

  const addPlayer = () => {
    setJoueur(prev => {
      return [...prev, {
        numero: 19,
        name: "Lamine Yamal",
      }]
    })
  }

  return(
    <div>
      <Navigation />
      <div className={`${General.page} text-center`}>
        <div className="text-xl font-bold mt-10 mb-2">Accueil</div>
        <div className="text-xl">Bonjour , {data} !</div>
        <div>
          {joueur.map((player, index) => {
            return <Player key={index} addLamine={addPlayer} numero={player.numero} name={player.name} />
          })}
        </div>
      </div>
    </div>
  )
}