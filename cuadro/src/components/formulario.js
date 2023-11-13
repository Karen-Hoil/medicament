import {useState} from "react";
import Home from "../page/home";
import Axios from "axios";


function Formulario(){
  const [medicamento, setMedicamento] = useState('');
  const [dosis, setDosis] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [toma, setToma] = useState('')
  const fechaMySQL = new Date().toISOString().slice(0, 10);

  const agregarMedicamento = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:3001/medicina',{
      nombreMedicina: medicamento,
      dosis: dosis,
      toma: toma,
      hora: new Date().toLocaleTimeString('es-ES'),
      fecha: fechaMySQL, 
      comentarios: comentarios
    }).then(()=>{
      console.log("Medicamento agregado")
    })
    setMedicamento('');
    setDosis('');
    setToma('');
    setComentarios('');
  }
    return(
        <>
        <Home/>
        <div style={{marginTop: 130, marginLeft:50, marginRight:50}}>
          <h1 style={{marginBottom:20}}>Agregar nuevo medicamento</h1>
          <form onSubmit={agregarMedicamento}>
          <div className="mb-3">
    <label className="form-label">Medicamento:</label>
    <input
      type="text"
      value={medicamento}
      onChange={(e) => setMedicamento(e.target.value)}
      className="form-control"
      placeholder="Ingresar medicamento"
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Dosis:</label>
    <input
      type="number"
      value={dosis}
      onChange={(e) => setDosis(e.target.value)}
      className="form-control"
      placeholder="Ingresar dosis"
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Cada cuanto se toma:</label>
    <div style={{ display: "flex" }}>
      <input
        type="number"
        value={toma}
        onChange={(e) => setToma(e.target.value)}
        className="form-control"
        placeholder="cada cuanto se toma"
      />
      
    </div>
  </div>
  <div className="mb-3">
    <label className="form-label">Comentario:</label>
    <input type="text" className="form-control" placeholder="Opcional" value={comentarios} onChange={(e) => setComentarios(e.target.value)}/>
  </div>
  <button type="submit">Agregar Medicamento</button>
          </form>
  
  </div>
</>
    )
}
export default Formulario