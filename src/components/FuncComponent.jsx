import { useState } from 'react'

const FuncComponent = () => {
    const [estudiante, setEstudiante] = useState({
        name: 'Fer',
        country: 'Argentina'
    })
    

    const changeName = () => {
        if(estudiante.name === 'Fer') setEstudiante({...estudiante, name: 'Ale'})
        else setEstudiante({...estudiante, name: 'Fer'})
    }
    
  return (
    <div>
        {console.log(estudiante)}
        <h2>{estudiante.name}</h2>
        <button onClick={changeName}>Cambiar nombre</button>
    </div>
  )
}

export default FuncComponent