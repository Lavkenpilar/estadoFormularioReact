import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState ("")
    const [error, setError] = useState (false)

    const validarInput = (e) => {
        // prevenimos el  comportamiento por defecto
        e.preventDefault()
        //Validación input
        if (nombre==='') {
            setError (true)
       // alert ('debes agregar tu nombre')
       return
    }
    // eliminar mensaje de error
    setError (false)
    }

  return (
    
   <form onSubmit={validarInput}>
{error ? <p className='error'>Debes ingresar tu nombre</p>:null}
    <h3>{nombre}</h3>
    <div className='form-group'>
    <input className='form-control' name = "Nombre" onChange={(e) => setNombre(e.target.value)}/>
    <button className='btn btn-dark mt-3'   type='submit'>Enviar</button>
    </div>
    </form>
   
  )
}

export default Formulario