import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState ("")

    const validarInput = () => {
        alert ('evento form')
    }

  return (
    
   <form onSubmit={validarInput}>
    <h3>{nombre}</h3>
    <div className='form-group'>
    <input className='form-control' name = "Nombre" onChange={(e) => setNombre(e.target.value)}/>
    <button className='btn btn-dark mt-3'   type='submit'>Enviar</button>
    </div>
    </form>
   
  )
}

export default Formulario