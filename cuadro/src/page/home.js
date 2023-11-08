import React from 'react'
import Formulario from '../components/formulario'
import Cuadro from './cuadro'

function Home() {
  return (
    <>
    
    <div className="body">
  <div>
    <h1
      style={{
        marginBottom: 30,
        textAlign: "center",
        color: "rgb(90, 190, 187)",
        fontSize: 50
      }}
    >
      CUADRO DE MEDICAMENTOS
    </h1>
    <h3 style={{ textAlign: "center", marginBottom: 20 }}>
      Bienvenido (Nombre de la persona)
    </h3>
    <div className="tabs">
      <input
        className="input"
        name="tabs"
        type="radio"
        id="tab-1"
        defaultChecked="checked"
      />
      <label className="label" htmlFor="tab-1">
        Agregar medicamento
      </label>
      <div className="panel">
        <Formulario/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <input className="input" name="tabs" type="radio" id="tab-2" />
      <label className="label" htmlFor="tab-2">
        Control de medicamentos
      </label>
      <div className='panel'>
        <div style={{ width: '100%' }}>
        <Cuadro/>
        </div>
        
      </div>
      
      </div>
      <input className="input" name="tabs" type="radio" id="tab-2" />
    </div>
  </div>
</div>

    </>
  )
}

export default Home
