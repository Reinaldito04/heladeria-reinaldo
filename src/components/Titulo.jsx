import React from 'react'
import foto from './imagenes/fondo.jpg'
import './hojas-estilos/Titulo.css'
function Titulo() {
  return (
    <div>
        <div className='container-fluid contenedor-titulo'>
            <h3 className='text-center h3-titulo'>Bienvenido a la heladeria</h3>
            <p className='text-center titulo-parrafo '>
                El lugar favorito de los pequeños y más grandes de la casa
            </p>
        </div>
    </div>
  )
}

export default Titulo