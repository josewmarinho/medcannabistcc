import React from 'react';

import './contato.css';

import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import logoWeed from '../../images/weed.svg';


export default function Contato() {
  return (
    <>
      <main className="containerContato">
        <section className="heroContato">
          <h1>Contato</h1>
          <img src={logoWeed} alt="Logo Weed" />

          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCGvVEwpsxRlq18Uh2HYocbg" className="linkk">
            <IoLogoYoutube />
            <h2>Youtube</h2>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MMovReCam/videos" className="linkk2">
            <FaFacebookF />
            <h2>Facebook</h2>
          </a>
        </section>
      </main>
    </>
  );
}
