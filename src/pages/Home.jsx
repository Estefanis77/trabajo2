//import React from 'react';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';


const Home = () => {
  const alumno = {
    nombre: 'Estefanis Rodriguez',
    edad: '29',
    legajo: '49038',
    numTel: '0303456',
    deporteFavorito: 'Gimnasio',
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