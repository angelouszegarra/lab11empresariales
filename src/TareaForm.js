// src/TareaForm.js

import React, { useState } from 'react';

function TareaForm({ agregarTarea }) { 
    const [texto, setTexto] = useState("");
    const [error, setError] = useState(""); // Agregar estado para el error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim() === "" || texto.length > 50) {
            setError("Por favor, ingrese una tarea válida (máx. 50 caracteres).");
            return;
        }
        setError("");
        agregarTarea(texto);
        setTexto("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Añadir tarea..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error */}
            <button type="submit">Agregar Tarea</button>
        </form>
    );
}

export default TareaForm;