import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajo from './ListadoTrabajo'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
         Hola, soy <strong>Baylis Brungger</strong> y soy desarrolladora web en Pasto, y ofrezco mis servicios de <strong>programacion</strong>   y  <strong>desarrollo</strong> en todo tipo de proyecto web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicacion web, tener mas visibilidad y relevancia en internet. Contacta conmigo.
        <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'>
     <h2 className='heading'>Algunos de mis proyectos</h2>
     <p>Estos son algunos de mis trabajos de desarrollo web</p>

     <ListadoTrabajo limite='3'/>
      </section>

    </div>
  )
}

export default Inicio
