//import React from 'react';
/* eslint-disable react/prop-types */

const Main = ({ alumno }) => {
  const { nombre, edad, legajo, numTel, deporteFavorito } = alumno;

  return (
    <div className="main-container">
      <h2 className="main-title">Datos del Alumno:</h2>
      <div className="card">
        <p className="card-item">Nombre: {nombre}</p>
        <p className="card-item">Edad: {edad}</p>
        <p className="card-item">Legajo: {legajo}</p>
        <p className="card-item">Número de teléfono: {numTel}</p>
        <p className="card-item">Deporte favorito: {deporteFavorito}</p>
      </div>
    </div>
  );
};

export default Main;