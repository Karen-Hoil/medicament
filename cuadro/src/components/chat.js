import React, { useState } from 'react';

const MedicationTable = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [medicamento, setMedicamento] = useState('');
  const [dosis, setDosis] = useState('');
  const [comentarios, setComentarios] = useState('');

  const agregarMedicamento = (e) => {
    e.preventDefault();
    const nuevoMedicamento = {
      medicamento,
      dosis,
      fecha: new Date().toLocaleDateString('es-ES'),
      hora: new Date().toLocaleTimeString('es-ES'),
      comentarios
    };
    setMedicamentos([...medicamentos, nuevoMedicamento]);
    setMedicamento('');
    setDosis('');
    setComentarios('');
  };

  return (
    <div className="medication-chart">
      <h2>Cuadro de Medicamentos</h2>
      <form onSubmit={agregarMedicamento}>
        <input
          type="text"
          value={medicamento}
          onChange={(e) => setMedicamento(e.target.value)}
          placeholder="Nombre del medicamento"
          required
        />
        <input
          type="text"
          value={dosis}
          onChange={(e) => setDosis(e.target.value)}
          placeholder="Dosis"
          required
        />
        <input
          type="text"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
          placeholder="Comentarios"
          required
        />
        <button type="submit">Agregar Medicamento</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Medicamentos</th>
            <th>Dosificación</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((med, index) => (
            <tr key={index}>
              <td>{med.medicamento}</td>
              <td>{med.dosis}</td>
              <td>{med.hora}</td>
              <td>{med.fecha}</td>
              <td>{med.comentarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationTable;
