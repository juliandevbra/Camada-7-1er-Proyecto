import React from 'react'

const OtraList = () => {

    const [lista, setLista] = useState(['elemento 1', 'elemento 2', 'elemento 3'])

  return (
    <div>
        {lista.map(elemento => {
            return(
                <> 
                    {elemento}
                </>
            )
        })}
    </div>
  )
}

export default OtraList