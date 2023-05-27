import React from 'react';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';


const Home = () => {
  const alumno = {
    nombre: 'Alvaro Albornoz',
    edad: '27',
    legajo: '55573',
    numTel: '0303456',
    deporteFavorito: 'Rugby',
  };

  return (
    <div>
      <Header/>
      <Main alumno={alumno}/>
      <Footer/>
      
    </div>
  );
};

export default Home;