import React from 'react';
import './cannabis.css';

import imgCannbis from '../../images/imgcannabis.jpg'

export default function Cannabis() {
  return (
    <>
      <main className="containerCannabis">
        <section className="heroCannabis">
          <h1>Resumo</h1>
          <p>A Cannabis vulgo 'Maconha' é uma planta cultivada há milênios, em torno do Himalaia, e que se propagou para todas as regiões do mundo, cujo potencial medicinal foi reconhecido muito cedo. Já passou pela história dos romanos, persas, egípcios, judeus, árabes e indianos, devido às suas propriedades analgésicas, anti-inflamatórias, benefícios na insônia, desordens gástricas, febres, vômitos e também pelas suas propriedades de modificação de humor. </p>
          <p>No século 20, em 1910, durante a revolução mexicana, imigrantes trouxeram à cultura dos Estados Unidos a forma recreacional da cannabis, e o seu uso começou ser associado a crimes. Houve então uma modificação política do tratamento da maconha não por causa de razões científicas, mas por razões econômicas e políticas ligadas também ao preconceito, contra Mexicanos e negros nos Estados Unidos. Entre a década de 20 a de 40, a maconha foi demonizada, e associada a uma ideia de que poderia levar a morte em sanidade e ao assassinato. </p>
          <p>Tudo isso começa a mudar quando nos anos 60, quando Raphael Mechoulam inicia pesquisas sobre canabinóides, substâncias contidas na maconha. Em 1964, foi identificado o delta-9 thc como sendo o principal componente psicoativo da maconha.</p>
          <p>O sistema endocanabinoide é um sistema Central que faz parte do metabolismo, tem inúmeras funções fisiológicas relacionadas e é por isso que tem tantas aplicações médicas por que de fato, se encontra numa espécie de encruzilhada metabólica entre diferentes processos com efeito sem resposta imune, apetite, sono, ansiedade, emoção, funções cardiovascular e respiratória, pressão intraocular, inflamação, reprodução, formação de novas memórias, extinção de memórias traumáticas, neuroproteção, neurogênese, percepção, coordenação motora, fluxo de pensamento e criatividade, motivação, entre outros mecanismos.</p>
          <p>O que é maconha medicinal? Quais são suas aplicações? Quais são os cuidados que a gente deve ter? É preciso ter as respostas dessas perguntas bem concretas na cabeça, para ser criada uma nova medicina que não só atenda melhor os interesses dos pacientes, mas resolva os seus sintomas ou cuide das causas das doenças, e que possa acontecer no ambiente de legalidade de harmonia de entendimento. Permitindo também reduzir as desigualdades as injustiças que aconteceram com as comunidades mais vulneráveis durante todo esse período da guerra às drogas. </p>
        </section>
        <img src={imgCannbis} alt="" />
      </main>
    </>
  )
}
