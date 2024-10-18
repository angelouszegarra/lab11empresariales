// src/App.js

import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import './App.css';

function App() {
    const [tareas, setTareas] = useState([]);
    const [filtro, setFiltro] = useState("Todas");

    const agregarTarea = (texto) => {
        setTareas([...tareas, { texto, completada: false }]);
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    const editarTarea = (index, nuevoTexto) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].texto = nuevoTexto; // Corregido
        setTareas(nuevasTareas);
    };

    const toggleCompletada = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada; // Corregido
        setTareas(nuevasTareas);
    };

    const filtrarTareas = (filtro) => {
        setFiltro(filtro);
    };

    // Nueva función para ordenar tareas
    const ordenarTareas = (orden) => {
        const tareasOrdenadas = [...tareas].sort((a, b) => {
            return orden === 'asc' ? a.texto.localeCompare(b.texto) : b.texto.localeCompare(a.texto);
        });
        setTareas(tareasOrdenadas);
    };

    let tareasFiltradas;

    if (filtro === "Pendientes") {
        tareasFiltradas = tareas.filter((tarea) => !tarea.completada); // Corregido
    } else if (filtro === "Completadas") {
        tareasFiltradas = tareas.filter((tarea) => tarea.completada); // Corregido
    } else {
        tareasFiltradas = tareas;
    }

    return (
      <div className="App">
          <h1>Lista de Tareas</h1>
          <TareaForm agregarTarea={agregarTarea} />
          <div>
              <button onClick={() => ordenarTareas('asc')}>Ordenar Ascendente</button>
              <button onClick={() => ordenarTareas('desc')}>Ordenar Descendente</button>
          </div>
          <Filtros filtrarTareas={filtrarTareas} />
          <ListaTareas 
              tareas={tareasFiltradas} 
              eliminarTarea={eliminarTarea} 
              editarTarea={editarTarea} 
              toggleCompletada={toggleCompletada} 
          />
      </div>
  );
}

export default App;