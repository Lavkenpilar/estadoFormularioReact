import React from 'react'
import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre]= useState ("")
  return (
    
   <form>
    <div className='form-group'>
    <input className='form-control' name = "Nombre" onChange={(e) => console.log(e.target.value)}/>
    <button className='btn btn-dark mt-3'   type='submit'>Enviar</button>
    </div>
    </form>
   
  )
}

export default Formulario