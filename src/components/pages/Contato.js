import React from 'react';

import './contato.css';

import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa'


export default function Contato() {
  return (
    <>
      <main className="containerContato">
        {/* <img src={} alt="" /> */}
        <section className="heroContato">
          <h1>Contato</h1>
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
