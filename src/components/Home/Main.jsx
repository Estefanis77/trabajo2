import React from 'react';

const Main = ({ alumno }) => {
  const { nombre, edad, legajo, numTel, deporteFavorito } = alumno;

  return (
    <div className="main-container">
      <h2>Datos del Alumno:</h2>
      <div className="card">
        <p>Nombre: {nombre}</p>
        <p>Edad: {edad}</p>
        <p>Legajo: {legajo}</p>
        <p>Número de teléfono: {numTel}</p>
        <p>Deporte favorito: {deporteFavorito}</p>
      </div>
    </div>
  );
};

export default Main;