import React from 'react';

import './padre.css';
import imgPticao from '../../images/imgpadreticao.jpg';

export default function Padre() {
  return (
    <>
      <main className="containerPadre">
        <img src={imgPticao} alt="Padre Ticão" />
        <section className="heroPadre"></section>
        <h1>Padre Ticão</h1>
        <p>O padre Antônio Luís Marchioni, mais conhecido como Padre Ticão, um sacerdote que lutou por diversas causas sociais. O religioso foi líder comunitário em Ermelino Matarazzo, na zona leste de São Paulo, onde fica sua paróquia. E pelo direito à saúde, ele desenvolveu um curso de naturopatia e outro para estudar a Cannabis medicinal – ambos em parceria com a Universidade Federal de São Paulo. Ele sonhava em tornar o povo independente daquilo que ele chama de “medicina do mercado”.</p>
        <p>“Foi uma luta pela saúde, mas hoje nós temos uma consciência clara de que foi um grande erro nosso a segunda parte: inaugurou e nós entregamos para um poder público que é casado com o pior tipo de medicina, que é essa medicina do mercado, dos laboratórios”, explicou o padre que, há cerca de 11 anos escutou a primeira palestra sobre Cannabis medicinal.</p>
        <p>As reuniões sobre saúde no salão da igreja começaram sobre temas específicos, tais como diabetes, câncer, depressão, depois passaram à formação de um curso de naturopatia, em parceria com a Universidade Federal – em que cada semana se discute uma erva – e já vai começar a sexta edição do curso sobre Cannabis medicinal: a primeira com 200 pessoas, a segunda com cerca de 500 participantes e, hoje, são mais de 5 mil inscritos.</p>
        <p>O início do ano 2021 é marcado com a triste notícia do falecimento do padre Ticão, o grande defensor dos oprimidos um verdadeiro anjo que caminha pela terra dando seu máximo para poder ajudar o próximo e diminuir a ignorância da população, ignorância essa que acaba por prejudicar muito as pessoas.</p>
      </main>
    </>
  );
}
