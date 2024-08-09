

export default function Player({numero, name, addLamine}) {
    return (
        <div className="border border-black px-4 py-2 rounded m-1 w-1/3 mx-auto my-2">
          <div>Numero : {numero} </div>
          <div>Nom : {name} </div>

          <button onClick={addLamine} className=" border border-black px-2 py-1 bg-gray-300">Ajouter Lamine Yamal</button>
        </div>
    )
}   