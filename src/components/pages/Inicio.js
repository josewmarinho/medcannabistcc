import React from 'react';
import './inicio.css';
import imgInicio from '../../images/Cannabis.jpg'

export default function Inicio() {
  return (
    <>
      <main className="container">
        <section className="hero">

          <h1>
            A ignorância <br /> é <span>o maior mal</span> <br /> da sociedade!
          </h1>

          <p>
            Faça parte da proxima turma de medicina canábica e se informe!! <br />
          </p>

          <div className="btninscrever"><a target="_blank" rel="noopener noreferrer" href="https://sistemas.unifesp.br/acad/proec-siex/index.php?page=INS&acao=1&code=20258">Inscreva-se</a></div>
        </section>

        <img src={imgInicio} alt="Girl Coding" />
      </main>
    </>
  );
}
