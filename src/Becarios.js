import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Becarios() {
  const [becarios, setBecarios] = useState([]);
  //filtrar
  const [becariosFiltrados, setBecariosFiltrados] = useState([]);
  const [opcionesInstitucion, setOpcionesInstitucion] = useState([]);
  const [opcionesPrograma, setOpcionesPrograma] = useState([]);
  const [filtroInstitucion, setFiltroInstitucion] = useState('');
  const [filtroPrograma, setFiltroPrograma] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/becarios')
      .then(response => {
        console.log('Datos recibidos del backend:', response.data.length, 'becarios');
        setBecarios(response.data);
        setBecariosFiltrados(response.data);

        //valores unicos para filtros 
        const institucionesUnicas = [...new Set(response.data.map(b => b.INSTITUCION_DESTINO))];
        const programas = [...new Set(response.data.map(b => b.NOMBRE_PROGRAMA_ESTUDIO))];
        setOpcionesInstitucion(institucionesUnicas);
        setOpcionesPrograma(programas);
      })
      .catch(error => {
        console.error('Error al obtener los becarios:', error);
      });

  }, []);

  const aplicarFiltros = () => {
    const filtrados = becarios.filter(b => {
      const cumpleFiltroInstitucion = filtroInstitucion === '' || b.INSTITUCION_DESTINO === filtroInstitucion;
      const cumpleFiltroPrograma = filtroPrograma === '' || b.NOMBRE_PROGRAMA_ESTUDIO === filtroPrograma;
      const cumpleBusqueda = filtroNombre === '' || 
        (b.NOMBRES + ' ' + b.APELLIDOS).toLowerCase().includes(filtroNombre.toLowerCase());
      
      return cumpleFiltroInstitucion && cumpleFiltroPrograma && cumpleBusqueda;
    });
    setBecariosFiltrados(filtrados);
  };

  const limpiarFiltros = () => {
    setFiltroInstitucion('');
    setFiltroPrograma('');
    setFiltroNombre('');
    setBecariosFiltrados(becarios);
  }

  return (
    <div>
    <h2> Listado de Becarios </h2>
    <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
      <strong>Total de Becados:</strong> {becarios.length}
      {becariosFiltrados.length !== becarios.length && (
        <span> | <strong>Becados Filtrados:</strong> {becariosFiltrados.length}</span>
      )}
    </div>
    {/* Selects para filtrar */}
      <div>
        <div style={{ marginBottom: '10px' }}>
          <label>Buscar por nombre o apellido: </label>
          <input
            type="text"
            value={filtroNombre}
            onChange={(e) => {
              setFiltroNombre(e.target.value);
              // Opcional: aplicar filtros automáticamente al escribir
              setTimeout(() => aplicarFiltros(), 300);
            }}
            placeholder="Escribe para buscar..."
          />
        </div>

        <label>Institucion:</label>
        <select value={filtroInstitucion} onChange={(e) => setFiltroInstitucion(e.target.value)}>
        <option value=''>--Todas--</option>
        {opcionesInstitucion.map((inst, i) => (
          <option key={i} value={inst}>{inst}</option>
        ))}
        </select>

        <label>Programa de Estudio:</label>
        <select value={filtroPrograma} onChange={(e) => setFiltroPrograma(e.target.value)}>
        <option value=''>--Todos--</option>
        {opcionesPrograma.map((prog, i) => (
          <option key={i} value={prog}>{prog}</option>
        ))}
        </select>

        <button onClick={aplicarFiltros}>Aplicar Filtros</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>
        
      </div>
      <ul>
        {becariosFiltrados.map((b, i) => (
          <li key={i}>
            {b.NOMBRES} {b.APELLIDOS} - {b.INSTITUCION_DESTINO} - {b.NOMBRE_PROGRAMA_ESTUDIO}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Becarios;
