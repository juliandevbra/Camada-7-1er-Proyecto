import React, { useState } from 'react'
import FormCard from './FormCard'

const Form = () => {
    const [persona, setPersona] = useState({
        name: '',
        bday: ''
    })
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Tu nombre es ' + persona.name + ' y cumplis el ' + persona.bday)
        alert('Tu nombre es ' + persona.name + ' y cumplis el ' + persona.bday)
        if(persona.name.length > 3) setShow(true)
    }

  return (
    <>
        <form className='formulario' onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" onChange={(e) => setPersona({...persona, name: e.target.value})}/>
            {/* si hay un error mostrar 'Coloque un nombre indicado'
            si no escribió nada mostrar 'Campo obligatorio' */}
            <label >Tu cumple:</label>
            <input type="text" onChange={(e) => setPersona({...persona, bday: e.target.value})}/>
            <button>Enviar</button>
        </form>

        {show ? <FormCard persona={persona}/>:null}
        {
            show && <FormCard persona={persona}/>
        }
        


        {/* 
        1. La condición 
        ?
        que se va a ejecutar si la condición da true
        :
        que se va a ejectuar si la condición da false
        */}
    </>
  )
}

export default Form