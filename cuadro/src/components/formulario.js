import React from "react";

function Formulario(){
    return(
        <>
  <div className="mb-3">
    <label className="form-label">Medicamento:</label>
    <input
      type="text"
      className="form-control"
      placeholder="Ingresar medicamento"
      style={{ width: 1190 }}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Dosis:</label>
    <input
      type="text"
      className="form-control"
      placeholder="Ingresar dosis"
      style={{ width: 1190 }}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Cada cuanto se toma:</label>
    <div style={{ display: "flex" }}>
      <input
        type="number"
        className="form-control"
        placeholder="cada cuanto se toma"
      />
      <select
        name="momento"
        id="momento"
        style={{
          width: 300,
          marginLeft: 20,
          borderRadius: 5,
          borderColor: "rgb(192, 192, 192)",
          paddingLeft: 5
        }}
      >
        <option value="tiempo">Elige una opción</option>
        <option value="tiempo">Minutos</option>
        <option value="tiempo">Horas</option>
        <option value="tiempo">Días</option>
        <option value="tiempo">Meses</option>
      </select>
    </div>
  </div>
  <div className="mb-3">
    <label className="form-label" style={{marginRight:10}}>Horario de inicio</label>
    <select
      name="inicio"
      id="inicio"
      style={{
        width: 200,
        height: 40,
        borderRadius: 5,
        borderColor: "rgb(192, 192, 192)",
        paddingLeft: 5
      }}
    >
      <option value="tiempo">Elige una opción</option>
      <option value="tiempo">Mañana</option>
      <option value="tiempo">Mediodía</option>
      <option value="tiempo">Tardes</option>
      <option value="tiempo">Noches</option>
    </select>
  </div>
  <div className="mb-3">
    <label className="form-label">Comentario:</label>
    <input type="text" className="form-control" placeholder="Opcional" />
  </div>
</>
    )
}
export default Formulario