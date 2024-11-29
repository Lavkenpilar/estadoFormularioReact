import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState ("")

    const validarInput = (e) => {
        // prevenimos el  comportamiento por defecto
        e.preventDefault()
        //Validación input
        if (nombre==='') {
        alert ('debes agregar tu nombre')
    }
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