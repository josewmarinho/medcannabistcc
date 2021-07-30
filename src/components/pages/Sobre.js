import React from 'react';
import './sobre.css';
import { Link } from 'react-router-dom';

import ImgSobre from '../../images/imgsbr.jpg'


export default function Sobre() {
  return (
    <>
    <main className="containerAbout">
     <img src={ImgSobre} alt="" />

      <section className="heroAbout">
      <h1>Mais informações</h1>
      <ul>
        <li><Link to="/cannabis">Cannabis</Link></li>
        <li><Link to="/padreticao">Padre Ticão</Link></li>
        <li><Link to="/curso">Curso MovReCam</Link></li>
      </ul>
      </section>
    </main>
    </>
  )
}
